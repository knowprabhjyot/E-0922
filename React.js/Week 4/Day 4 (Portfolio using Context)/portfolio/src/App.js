import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const appRef= useRef();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div ref={appRef}>
      <ThemeContext.Provider
        value={{theme,toggleTheme}}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer rootRef={appRef} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
