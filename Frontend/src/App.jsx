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
import EncyclopediaDetail from './Pages/EncyclopediaDetail'
import Broadcast from './Pages/Broadcast';
import EncyclopediaMethod from './Components/EncyclopediaMethod';

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

      <Route path='/encyclopedia/:slug' element={
        <EncyclopediaDetail/>
           }/>
      </Routes>
    </>
    </Router>
  )
}

export default App
