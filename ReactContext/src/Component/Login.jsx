import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () =>{
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState ('')

    const {setUser} = useContext(UserContext)
    const handelSubmit = (e) => {
        if(!userName || !password){
            alert ("Please Fill all the fields")
            return;
        }
        e.preventDefault()
        setUser({userName, password})
    }
    return(
        <>
            <div className="w-full px-2 mx-2"> 
                <h2> Login </h2>
                <input 
                className="px-2 py-1 rounded me-2"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text" placeholder="Username" />
                
                <input 
                className="px-2 py-1 rounded me-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text" placeholder="Password" />
                <button onClick={handelSubmit} className="bg-orange-600 rounded px-2 py-1 text-white ms-2"> Submit </button>
            </div>
        </>
    )
}
export default Login