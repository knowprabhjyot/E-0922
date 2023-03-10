import logo from './logo.svg';
import './App.css';

// Destrucutring ?
import { Header } from './components/header';
import { Footer } from './components/footer';
import { CardComponent } from './components/card';

// App component which contains two things
// 1. Logic for that Particular Component
// 2. It contains the Template/HTML for the component
function App() {
  return (
    <div className="App">
     {/* <h1>Hello World!</h1> */}
     {/* <Header />
     <Header />
     <Header />
     <Header /> */}
     {/* <Footer /> */}
     {/* Load your footer component here */}

     {/* We can pass data as props which act as attributes over these tags */}
     <CardComponent title="Lorem 1" />
     <CardComponent title="Lorem 2" />
     <CardComponent title="Lorem 3" />
     <CardComponent  title ="Lorem4 " />
    </div>
  );
}


// Components are of two types
// 1. Class Based Components (Classes You write in Javascript)
// 2. Functional Based components (Functions like in javascript)

export default App;
