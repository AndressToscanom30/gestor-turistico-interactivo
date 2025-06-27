import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/inicio.jsx';
import Navbar from './components/navBar.jsx';
import CulturaHistoria from './pages/CulturaHistoria.jsx';
import GastroComercio from './pages/gastroComercio.jsx';
import TurismoReligioso from './pages/turismoReligioso.jsx';
import AventuraVerde from './pages/AventuraVerde.jsx';
import Intro from './pages/Intro.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
    <BrowserRouter>
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
