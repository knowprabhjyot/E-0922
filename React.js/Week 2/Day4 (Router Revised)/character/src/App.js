import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterProfile from './pages/CharacterProfile/CharacterProfile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/character' element={<CharacterPage />} />
          <Route path='/character/:id' element={<CharacterProfile />} />
        </Routes>
    </div>
  );
}

export default App;
