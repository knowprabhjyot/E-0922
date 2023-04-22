import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App(): JSX.Element {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
