import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Counter from './pages/Counter/Counter'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/count' element={<Counter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
