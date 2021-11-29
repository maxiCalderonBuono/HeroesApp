import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Loginpage = () => {

const navigate = useNavigate () ;


const handleClick = () => {
    navigate('/', {replace:true});
}


    return (
        <div className= 'container mt-5'>
            <h1>Login</h1>
            <hr/>
            <button className = 'btn btn-primary' onClick = {handleClick}>
              Login
            </button>
        </div>
    )
}
