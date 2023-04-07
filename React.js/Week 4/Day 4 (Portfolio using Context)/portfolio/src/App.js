import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext.Provider
        value={{theme,toggleTheme}}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
