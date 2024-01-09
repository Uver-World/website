import { useState } from "react"
import { renewToken } from "../../api/users"
import { useNavigate } from "react-router-dom"
import { log } from "console"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const token = await renewToken(email, password)

        if (token.data && token.data.code && token.data.code != 200) {
            alert(token.data.message)
        } else {
            localStorage.setItem('token', token.data)
            navigate('/profile')
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}