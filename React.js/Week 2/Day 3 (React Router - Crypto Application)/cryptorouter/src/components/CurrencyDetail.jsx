import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function CurrencyDetail() {

    const { coin } = useParams();
    const [coinData, setCoinData] = useState({});
    console.log(coin);

    useEffect(() => {
        getCoinDetails();
    }, [coin])

    const getCoinDetails = async () => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/?vs_currency=usd`);
        setCoinData(data);
    }

    return (
        <div>
           <h1>COIN : {coinData.name}</h1>  
           <img src={coinData.image?.large} alt="" width={40} height={40} />
           <p>Description: {coinData.description?.en}</p>
        </div>
    )
}
