import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext';

export default function FunctionalComponent() {

const userData = useContext(UserContext);

  return (
    <div>
        <h1>Functional Component</h1>
        {
            userData.map((userObject) => {
                return <img src={userObject.avatar} alt='' />
            })
        }
    </div>
  )
}


// Tomorrow we will make a portfolio application where i will show you can update the context
// THEME - DARK OR LIGHT MODE
// Styled Componentt

