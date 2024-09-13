import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { loginWithToken, verifyPermission } from "./api/users";
import "./assets/styles/globals.css";

type ProtectedRouteProps = {
  child: JSX.Element;
  permissions: string[];
};

export const ProtectedRoute = ({ child, permissions }: ProtectedRouteProps) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [userDataFetched, setUserDataFetched] = useState(false);

  useEffect(() => {
    const checkAccess = async (userId: string): Promise<boolean> => {
      let result: boolean = false;
      const token = localStorage.getItem("token") || "";

      for (const permission of permissions) {
        const response = await verifyPermission(userId, permission, token);

        if (response.data === true || response.data === "true") {
          result = true;
          break;
        }
      }

      return result;
    };

    const getUser = async () => {
      const userData = await loginWithToken(
        localStorage.getItem("token") || ""
      );

      if (userData.data.code && userData.data.code !== 200)
        alert(userData.data.message);
      else {
        const hasAccess = await checkAccess(userData.data.unique_id);

        setHasAccess(hasAccess);
      }

      setUserDataFetched(true);
    };

    getUser();
  }, [permissions]);

  if (!userDataFetched) {
    return null;
  }

  if (!hasAccess) {
    return <Navigate to="/" />;
  }

  return child;
};
