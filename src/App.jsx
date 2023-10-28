import { useState } from 'react'
import './App.css'
import Navbar from './Components/NAVBAR.JSX'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Card from './Components/Card';
import Landing from './Components/Landing';


function App() {

  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={
        <Landing/>}/>
      <Route exact path='/home' element={
        <>
        <Navbar/>
        <Card/>
</>
      }/>
      </Routes>
    </>
    </Router>
  )
}

export default App
