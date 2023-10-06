import React from 'react';
import "./style.css"
import { useState, useEffect } from "react"


const Registration = () => {

 
    const data = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }
    const [user, setUser] = useState(data)
    const {username, email, password, passwordConfirm} = user

    const handleSubmit = (e) => {
        e.preventDefault()


    }



return (
    <section>
        <form id="form" onSubmit={handleSubmit}></form>

        
        <input type="email" placeholder="Email address"/>

        <input type="text" placeholder="User name"/>

        <input type="password" placeholder="Password"/>
                
        <input type="password" placeholder="Confirm password"/> 
         
        <button type="submit">Register</button>
      
    </section>
    )
}

export default Registration