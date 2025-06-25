import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AutoComplete from './pages/inicio'

function App() {

  return (
    <>
    <BrowserRouter>
      {/*<NavBar />*/}
      <Routes>
        <Route path='/' element={<a href='/inicio'><h1>Gestor turístico interactivo</h1></a>}></Route>
        <Route path='/inicio' element={<AutoComplete />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
