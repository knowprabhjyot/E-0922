import logo from './logo.svg';
import './App.css';
import StyledButton from './components/StyledButton';
import { useState } from 'react';

function App() {

  // Destructuring array here!
  let [counter, setCounter] = useState(0);

  const increment = () => {
    console.log('increment');
    setCounter(counter + 1);
  }

  const decrement  = () => {
    console.log('decrefment');
    setCounter(counter - 1);
  }

  return (
    <div className="App">
        <StyledButton onStyledButtonClick={decrement} title="DECREMENT -" />
        <span>{counter}</span>
        <StyledButton onStyledButtonClick={increment} title="INCREMENT +" />
    </div>
  );
}

export default App;
