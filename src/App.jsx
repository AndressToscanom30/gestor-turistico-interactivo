import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/inicio.jsx';
import Navbar from './components/Navbar.jsx';
import CulturaHistoria from './pages/CulturaHistoria.jsx';
import GastroComercio from './pages/GastroComercio.jsx';
import TurismoReligioso from './pages/TurismoReligioso.jsx';
import AventuraVerde from './pages/AventuraVerde.jsx';
import Intro from './pages/Intro.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
    <BrowserRouter basename='/'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/inicio' element={<Inicio />}></Route>
        <Route path='/cultura-historia' element={<CulturaHistoria />}></Route>
        <Route path='/gastro-comercio' element={<GastroComercio />}></Route>
        <Route path='/turismo-religioso' element={<TurismoReligioso />}></Route>
        <Route path='/aventura-verde' element={<AventuraVerde />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
