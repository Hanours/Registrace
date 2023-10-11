
import React from "react";
import { useState, useEffect } from "react";
import './style.css';


const Registration = () => {

 
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
  
    const {username, email, password, passwordConfirm} = user
 

      const handleEmailChange = event => {
        const { value } = event.target
        let username = user.username
        if (username === '' && value.indexOf('@') != -1) {
          username = value.split('@')[0]
        }
        setUser(prevState => ({
          ...prevState,
          email: value,
          username,
        }))
      } 
    
    

  return (
    <section>
      <h1>Registration</h1>
        <form >
            <input
              type='email'
              name='email'
              required
              placeholder='Email Address'
              value={email}
              onChange={handleEmailChange}
            />
       
            <input
              type='text'
              name='username'
              placeholder='User Name'
              value={username}
              onChange={e => setUser({...user, username: e.target.value})}
            />
         

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={e => setUser({...user, password: e.target.value})}

            />
         
         
            <input
              type='password'
              id="passwordconfirm"
              placeholder='Confirm Password'
              value={passwordConfirm}
              onChange={ e => setUser({...user, passwordConfirm: e.target.value})}
              />
         
           
          
            <button
              type='button'
                onClick={() => console.log(user)}>
              Register
            </button>
         
        </form>
    </section>
  )
}

export default Registration