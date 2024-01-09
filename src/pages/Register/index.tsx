import { useState } from "react"
import { registerUser } from "../../api/users"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async () => {
        const token = await registerUser(email, password)

        if (token.data && token.data.code && token.data.code != 200) {
            alert(token.data.message)
        } else {
            localStorage.setItem('token', token.data.token)
            navigate('/login')
        }
    }

    return (
        <div>
            <h1>Register</h1>

            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

            <button onClick={handleRegister}>Register</button>
        </div>
    )
}