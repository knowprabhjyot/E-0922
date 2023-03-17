import logo from "./logo.svg";
import "./App.css";
import CryptoTable from "./components/CryptoTable";
import axios from "axios"; // ES6 
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

function App() {

  const [currencyData, setCurrencyData] = useState([]);
  const [currencyDataCopy, setCurrencyDataCopy] = useState([]);
  const [searchedKeyword, setSearchedKeyword] = useState("");

  useEffect(() => {
    getCryptoData();
  }, [])

  const getCryptoData = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
    setCurrencyData(data);
    setCurrencyDataCopy(data);
  }

  // This is a bug that I want to see how you guys fix it.
  const searchCrypto = (event) => {

    if (event.target.value.length === 0) {
      setCurrencyData(currencyDataCopy);
    } else {
      setSearchedKeyword(event.target.value);
      const searchedArray = currencyData.filter((currency) => {
        if (currency.name.includes(event.target.value)) {
          return true;
        }
        return false;
      });
  
      setCurrencyData(searchedArray);
    }

  }
 
  // useEffect(() => {

  // })
  return (
    <div className="App">
      <TextField value={searchedKeyword} onChange={searchCrypto} fullWidth={true} id="time" type="search" placeholder="Search for a crypto currency" />;
      <CryptoTable currencyData={currencyData} />
    </div>
  );
}

export default App;
