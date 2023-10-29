import { useState } from 'react'
import './Styles/App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './Components/Landing';
import HomePage from './Pages/HomePage';


function App() {

  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={
        <Landing/>}/>
      <Route exact path='/home' element={
   <HomePage/>
      }/>
      </Routes>
    </>
    </Router>
  )
}

export default App
