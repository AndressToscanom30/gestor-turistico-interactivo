import { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './pages/inicio.jsx';
import Navbar from './components/Navbar.jsx';
import CulturaHistoria from './pages/CulturaHistoria.jsx';
import GastroComercio from './pages/GastroComercio.jsx';
import TurismoReligioso from './pages/TurismoReligioso.jsx';
import AventuraVerde from './pages/AventuraVerde.jsx';
import Intro from './pages/Intro.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return localStorage.getItem('introSeen') !== 'true';
  });

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        localStorage.setItem('introSeen', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <BrowserRouter basename='/'>
      {showIntro && <Intro />}
      {!showIntro && (
        <>
          <Navbar />
          <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/cultura-historia' element={<CulturaHistoria />} />
            <Route path='/gastro-comercio' element={<GastroComercio />} />
            <Route path='/turismo-religioso' element={<TurismoReligioso />} />
            <Route path='/aventura-verde' element={<AventuraVerde />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
