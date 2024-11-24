import React, { useContext } from "react"; 
import UserContext from "../Context/UserContext";

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h1> Please Login</h1>
    return <div> Welcome {user.userName}</div>
    
}
export default Profile