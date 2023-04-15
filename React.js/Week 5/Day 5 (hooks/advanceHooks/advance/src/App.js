import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState } from 'react';
import { useCallback } from 'react';

function App() {

  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [updateValue, setUpdateValue] = useState(0);

  const handleChildClick = () => {
    setChildCounter(prevState => prevState + 1)
  }

  // useCallback (MEMOIZE A PARTICULAR FUNCTION, if the function was not changed then we can pick it from the cache)
  const memoizedCallBack = useCallback(handleChildClick, [updateValue]);



  return (
    <div className="App">
        <Child updateCounterForChild={memoizedCallBack} childCounter={childCounter} />
        {/* <button onClick={() => setChildCounter(prevState => prevState + 1)} >IncrementForChild</button> */}

        <p>Parent - {parentCounter}</p>
        <button onClick={() => setParentCounter(prevState => prevState + 1)}>IncrementForParent</button>


        <button onClick={() => setUpdateValue(prevState => prevState + 1)}>Set Update Value</button>
    </div>
  );
}

export default App;
