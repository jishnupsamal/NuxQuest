import { useState } from 'react'
import './Styles/App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Landing from './Pages/Landing';
import HomePage from './Pages/HomePage';
import Dictionary from './Pages/Dict';
import Encyclopedia from './Pages/Encyclopedia'
import Broadcast from './Pages/Broadcast';

function App() {

  return (
    <Router>
    <>
      <Routes>
        <Route exact path='/' element={
        <Landing/>}/>
      <Route exact path='/dict' element={
   <Dictionary/>
      }/>
       <Route exact path='/home' element={
   <HomePage/>
      }/>
       <Route exact path='/broadcast' element={
   <Broadcast/>
      }/> 
      <Route exact path='/encyclopedia' element={
        <Encyclopedia/>
           }/>
      </Routes>
    </>
    </Router>
  )
}

export default App
