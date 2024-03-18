import React, {useState} from "react";
import authService from "../services/authService";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const handleClick = async () => {
        try {
            const token = await authService.login(username,password);
            localStorage.setItem('token',token);
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}