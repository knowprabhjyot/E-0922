import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function CurrencyDetail() {

    const { coin } = useParams();
    console.log(coin)
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState();
    const [data, setData] = useState();


    useEffect(() => {
        getCoinDetails();
        getChartData();
    }, [coin])

    const getCoinDetails = async () => {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/?vs_currency=usd`);
        setCoinData(data);
    }

    const getChartData = async () => {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10');
        setChartData(data);
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        setData({
            labels,
            datasets: [
              {
                // label: coin,
                data: chartData.prices.map(val => val[1]) ,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          });
    }



    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      

    return (
        <div>
            <h1>COIN : {coinData.name}</h1>
            <img src={coinData.image?.large} alt="" width={40} height={40} />
            <p>Description: {coinData.description?.en}</p>
            { 
                chartData?.prices ? <Bar options={options} data={data} /> : null
            }
        </div>
    )
}
