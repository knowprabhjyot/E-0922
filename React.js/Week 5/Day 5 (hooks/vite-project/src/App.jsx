import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import Form from './components/Form';

function App() {

  // var [count, setCount] = useState(0);

  // // component Did Mount
  // useEffect(() => {

  // }, []);

  // const handleClick = () => {
  //   setCount(prevState => prevState + 1)
  // }


  // // component Did update
  // useEffect(() => {

  // }, [count]);

  // //component will unmount

  // useEffect(() => {

  //   const Button = document.getElementById('button1');
  //   Button.addEventListener ('click',handleClick );
  
  //   // When the component is being destroyed
  //   return () => {
  //     console.log('destroyed...');
  //     Button.removeEventListener('click', handleClick);
  //   }
  // }, [])

  // LifeCycle methods in Class based components


  // ComponentDidUnmount
  // Unsubscribing a service
  // If you are sockets you can close connections there
  // If you are having memory leak 


  // const increment = () => {
  //   setCount(prevState => prevState + 1)
  // }


  return (
    <div className="App">
      {/* {count}
      <button id='button1'>Increment</button> */}
      < Form />
    </div >
  )
}

export default App
