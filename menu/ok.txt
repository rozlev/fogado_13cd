import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Navbar} from "./components/Navbar";
import{About,Contact,Home,Services} from ".components/pages/Home";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>


        
      </Routes>


    </div>
  );
}

export default App
