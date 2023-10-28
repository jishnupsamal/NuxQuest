import { useState } from 'react'
import './App.css'
import Navbar from './Components/NAVBAR.JSX'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Card from './Components/Card';


function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Card/>
    </Router>
    </>
  )
}

export default App
