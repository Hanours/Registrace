import React from 'react';
import "./style.css"
import { useState, useEffect } from "react"


const Registration = () => {

 
    const Data = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }



return (
    <section>
      
        <input type="email" placeholder="Email address"/>

        <input type="text" placeholder="User name"/>

        <input type="password" placeholder="Password"/>
                
        <input type="password" placeholder="Confirm password"/> 
         
        <button type="submit">Register</button>
      
    </section>
    )
}

export default Registration