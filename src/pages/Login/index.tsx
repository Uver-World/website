import { useState } from "react"
import { renewToken } from "../../api/users"
import styles from './styles/index.module.css';
import { registerUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import SolarSystem from "../../components/SolarSystem";
import { Link } from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const token = await renewToken(email, password)

        if (token.data && token.data.code && token.data.code !== 200) {
            alert(token.data.message);
        } else {
            const currentDate = new Date().toISOString();
            localStorage.setItem('token', token.data);
            localStorage.setItem('tokenDate', currentDate);
            navigate('/profile');
            window.location.reload();
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <SolarSystem />
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.textContainer}>Please submit your account credentials</p>
                <p className={styles.textContainer}>Don't have an account? <Link to="/register"  className={styles.loginLink}>Register</Link></p>
                <input type="email" className={styles.cardFeature} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" className={styles.cardFeature} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button  onClick={handleLogin} className={styles.appDownload}>Login</button>
            </div>
        </section>
    );
}