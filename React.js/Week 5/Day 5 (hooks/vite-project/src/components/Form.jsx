import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import { useTheme } from '../hooks/useTheme';
import './form.css';

export default function Form() {
    const [isValid, handleChange] = usePasswordValidation();
    // const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { theme , toggleTheme } = useTheme();
    // const [username, setUserName] = useLocalStorage('username', "JOHN DOE");

    const [userName, setUserName] = useLocalStorage("username", "JOHN DOE");

    // setTimeoutHook
    // useDebounceHook

    // Assignment to write your own hook (30 minutes)
    // to update a value in localstorage

    // const submitForm = () => {

    // }

    // Memo
    // useCallback
    // useMemo (Monday)

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div> 
            <p>Changed THeme  - {theme}</p>
            {/* <button onClick={}>{theme}</button> */}
            <form style={{ display: 'flex', flexDirection: "column" }}>
                <label htmlFor="name">User Name</label>
                <input value={userName} type="text" placeholder='Enter user name' onChange={handleUserNameChange} />
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
