import "./App.css";
import CryptoContainer from "./components/CryptoContainer";
// import { Route, Routes } from 'react-router-dom';
import { useRoutes } from "react-router-dom";

import CurrencyDetail from "./components/CurrencyDetail";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <CryptoContainer />,
    },
    { path: "/currency/:coin", element: <CurrencyDetail /> },
  ]);

  return element;
}

export default App;
