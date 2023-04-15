import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { useTheme } from '../hooks/useTheme';
import './form.css';

export default function Form() {
    const [isValid, handleChange] = usePasswordValidation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { theme , toggleTheme } = useTheme();
    // const [] = useLocalStorage();


    // Assignment to write your own hook (30 minutes)
    // to update a value in localstorage

    const submitForm = () => {

    }

    return (
        <div> 
            <p>Changed THeme  - {theme}</p>
            {/* <button onClick={}>{theme}</button> */}
            <form style={{ display: 'flex', flexDirection: "column" }}>
                <label htmlFor="name">User Name</label>
                <input type="text" placeholder='Enter user name' value={userName} onChange={(e) => {
                    setUserName(e.target.value);
                }} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' onChange={handleChange} />
              {
                isValid ?  <p style={{ color: 'red' }}>Password is not in valid state</p> : ""
              }
            
              
              <button onClick={() => submitForm()}>Submit</button>
            </form>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}
