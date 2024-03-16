import { useState } from "react";
import styles from './styles/index.module.css';
import { registerUser } from "../../api/users";
import { useNavigate } from "react-router-dom";
import SolarSystem from "../../components/SolarSystem";
import { Link } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const token = await registerUser(email, password, username);

        if (token.data && token.data.code && token.data.code !== 200) {
            alert(token.data.message);
        } else {
            localStorage.setItem('token', token.data.token);
            navigate('/login');
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <SolarSystem />
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>
                <p className={styles.textContainer}>Please submit your registration credentials</p>
                <p className={styles.textContainer}>Already have an account? <Link to="/login"  className={styles.loginLink}>Log in</Link></p>
                <input type="username" className={styles.cardFeature} placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="email" className={styles.cardFeature} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" className={styles.cardFeature} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button  onClick={handleRegister} className={styles.appDownload}>Register</button>
            </div>
        </section>
    );
};
