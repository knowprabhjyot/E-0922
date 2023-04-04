import { TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CryptoTable from './CryptoTable'

export default function CryptoContainer() {

    const [currencyData, setCurrencyData] = useState([]);
    const [searchedKeyword, setSearchedKeyword] = useState("");

    useEffect(() => {
        getCryptoData();
    }, [])


    const getCryptoData = async () => {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets/?vs_currency=cad');
        setCurrencyData(data);
    }

    const filteredCurrency = currencyData.filter((currency) => currency.name.toLowerCase().includes(searchedKeyword.toLowerCase()));


    return (
        <div>
            <TextField value={searchedKeyword} onChange={(event) => setSearchedKeyword(event.target.value)} fullWidth={true} id="time" type="search" placeholder="Search for a crypto currency" />;
            <CryptoTable currencyData={filteredCurrency} />
        </div>
    )
}
