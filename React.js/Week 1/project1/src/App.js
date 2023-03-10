import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';

// App component which contains two things
// 1. Logic for that Particular Component
// 2. It contains the Template/HTML for the component
function App() {
  return (
    <div className="App">
     {/* <h1>Hello World!</h1> */}
     <Header />
     {/* Load your footer component here */}
    </div>
  );
}


// Components are of two types
// 1. Class Based Components (Classes You write in Javascript)
// 2. Functional Based components (Functions like in javascript)

export default App;
