import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/configration";
import { logout } from "../../store/authSlice";

const Logout = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
    return (
        <>
            <button className="px-3 py-4 bg-blue-400 rounded-full"> Logout </button>
        </>
    )
}
export default Logout