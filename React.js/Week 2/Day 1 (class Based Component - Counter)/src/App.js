import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import StyledButton from "./Components/StyledButton";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // console.log("construjctor");
    this.state = {
      counter: 0,
      style: {
        decrement: {
          background: 'red',
          color: 'white',
          width: 300
        },
        increment: {
          background: 'green',
          color: 'orange',
          width: 600
        }
      }
    }
  }

  // LifeCycleHooks

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log('Component Did Update!');
  }

  shouldComponentUpdate() {
    console.log('Should component Update');
    return false;
  }

  componentWillUnmount() {
    // This will get called when the component is going to be destroyed
  }

  decrement() {
    console.log("Called");
    // This is not a right practice, do not mutate
    // state directly it won't call render
    // this.state.counter -= 1;
    this.setState({
      counter: this.state.counter - 1
    })
  }

  increment() {
    // This is not a right practice, do not mutate
    // state directly it won't call render
    // this.state.counter += 1;
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  // Deprecated
  // componentWillReceiveProps

  // This is the function that will render your UI
  render() {
    console.log("render");
    return (
      <div className="App">
        {/* <button onClick={() => this.decrement()}>DECREMENT -</button> */}
        <StyledButton styleConfig={this.state.style.decrement} styledButtonOnclick={this.decrement.bind(this)} title="DECREMENT -" />
        <span style={{ padding: 8}}>{this.state.counter}</span>
        {/* <button onClick={() => this.increment()}>INCREMENT -</button> */}
        <StyledButton styleConfig={this.state.style.increment} styledButtonOnclick={() => this.increment()} title="INCREMENT +" />
      </div>
    );
  }
}

export default App;
