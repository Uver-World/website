import { useState, useEffect } from 'react';
import './assets/styles/globals.css';
import { loginWithToken } from './api/users';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ child, groups }) => {
    const [hasAccess, setHasAccess] = useState(false);
    const [userDataFetched, setUserDataFetched] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            const userData = await loginWithToken(localStorage.getItem("token") || "");
    
            if (userData.data.code && userData.data.code !== 200) {
                alert(userData.data.message);
            } else {
                const access = groups.includes(userData.data.group);
                setHasAccess(access);
            }
            setUserDataFetched(true);
        };
        
        getUser()
    }, [groups]);

    if (!userDataFetched) {
        return null;
    }

    if (!hasAccess) {
        return <Navigate to = "/"/>
    }
   
    return child;
};
