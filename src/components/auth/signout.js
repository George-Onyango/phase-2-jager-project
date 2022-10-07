import React from "react";
import { useNavigate } from "react-router-dom";


function SignOut() {
    const navigate = useNavigate();


    function logout() {
        navigate('/signin')
    }

    function takeMeHome() {
        navigate('/')
    }

    return (
        <div>
            <p>Do you wish to leave</p>
        </div>
    )
}

export default SignOut