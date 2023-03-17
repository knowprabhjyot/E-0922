import logo from "./logo.svg";
import "./App.css";
import CryptoTable from "./components/CryptoTable";
import axios from "axios"; // ES6 
import { useEffect, useState } from "react";

function App() {

  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    getCryptoData();
  }, [])

  const getCryptoData = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
    console.log(data, "Data");
    setCurrencyData(data);
  }
 
  // useEffect(() => {

  // })
  return (
    <div className="App">
      <CryptoTable currencyData={currencyData} />
    </div>
  );
}

export default App;
