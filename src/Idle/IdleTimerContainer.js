import React, { useRef, useContext } from 'react'
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";
import IdleTimer from 'react-idle-timer'
import Swal from 'sweetalert2'

export const IdleTimerContainer = () => {

    const {user, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const idleTimeRef= useRef(null);

    const alert = () => {Swal.fire({
        position: 'center',
        icon: 'info',
        title: `${user.name} ! You Have Been Idle!`,
        text: 'You got Logout!',
        showConfirmButton: true,
        confirmButtonText: 'Login',
   
      })}

    const onIdle = () => {
        
       if (!user.logged) return ;

        const action = {
            type: types.logout,
          }
      
          dispatch(action);
      
          navigate("/login", { replace: true });

        alert()
    }
    return (
        <IdleTimer ref= {idleTimeRef} timeout = { 300 * 1000} onIdle= {onIdle} ></IdleTimer>
    )
}
