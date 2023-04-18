import './App.css'
import { useDispatch } from 'react-redux'
import { decrementValue, incrementValue } from './action/action'
import CountValue from './countValue'

function App() {

  // Dispatching is a concept where we dispatch whaqt value ? and what action ?
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* INCREMENT */}
      <button onClick={() => dispatch(incrementValue(1))}>Increment</button>
      <CountValue />
      {/* DECREMENT */}
      <button onClick={() => dispatch(decrementValue(1))}>Decrement</button>
    </div>
  )
}

export default App

// use State (its only for that particular component)
// what if that state can be jused by other component ?
//CART EXAMPLE
  // ADD TO CART PAGE
  // CHECKOUT PAGE
  // PAYMENT PAGE
  // FINAL PAGE ORDER
  // ORDER HISTORY PAGE

  // You can use redux and useState , when you don't want to store that information in the global store
  