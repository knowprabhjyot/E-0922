import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Banner }  from './components/Banner/Banner';
import HotelCard from './components/HotelCard/HotelCard';
import data from './constants/hotelData.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className='card-container'>
      {
        data.map((hotelData) => {
          return <HotelCard data={hotelData} />
        })
      }
      </div>
      {/* <HotelCard />
      <HotelCard />

      <HotelCard />

      <HotelCard /> */}

    </div>
  );
}

export default App;
