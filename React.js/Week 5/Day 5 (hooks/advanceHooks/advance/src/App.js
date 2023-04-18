import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useMemo, useState } from 'react';
import { useCallback } from 'react';

function App() {
  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [updateValue, setUpdateValue] = useState(0);
  const [array ,setArray] = useState([20, 40, 100, 40000, 500, 1000, 2000]);

  // const array = [20, 40, 100, 40000, 500, 1000, 2000];

    //  To fix this we use something called as UseMemo ?
  const getMaximumValue = () => {
    console.log("WHY I AM CALLED (PARENT - GET MAXIMUM VALUE!)?");
    // Which means you are calculating a maximum value on this array which is always same
    return Math.max(...array);
  };
  
  const maximumMemoizedValue = useMemo(() => getMaximumValue(), [array]);

  const handleChildClick = () => {
    setChildCounter((prevState) => prevState + 1);
  };

  // Any questions in usecallback or memo ?

  // useCallback (MEMOIZE A PARTICULAR FUNCTION, if the function was not changed then we can pick it from the cache)
  const memoizedCallBack = useCallback(handleChildClick, [updateValue]);

  // useCallback is to memoize a function
  // useMemo is to memoize a value

  // useMemo is memoizing an expensive operation


  const changeArray = () => {
    setArray([20, 40, 50]);
  }


  return (
    <div className="App">
      <Child
        updateCounterForChild={memoizedCallBack}
        childCounter={childCounter}
      />
      {/* <button onClick={() => setChildCounter(prevState => prevState + 1)} >IncrementForChild</button> */}

      <p>Parent - {parentCounter}</p>
      <button onClick={() => setParentCounter((prevState) => prevState + 1)}>
        IncrementForParent
      </button>

      <button onClick={() => setUpdateValue((prevState) => prevState + 1)}>
        Set Update Value
      </button>

      <div>Maximum Value of array: {maximumMemoizedValue}</div>

      <button onClick={changeArray}>Update Array</button>
    </div>
  );
}

export default App;

// Assignment use Memo
// Assignment (You need to have a function in your project which calculates Factorial number!)
// const [n, setN] = useState();
// function factorial() { return n! };

// { n }

// Small Task as well. 
// Go to your midterm (Grade as well)
  // Go to your child components
  // Do a console.log and see if that console.log is fired
  // If you think that was required ?
  // If NO, then first try to wrap the child component into memo
  // If it works ? Try to break it ? and then use Callback to fix it ?
  // If it doesn't work, you have to use callback anyway

// Introduction to redux