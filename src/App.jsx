import React, {useEffect, useState} from 'react'

import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/Home/Home.jsx'
import './pages/Home/Home.css'

import Monitor from './pages/Monitor/Monitor.jsx'
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/monitor' element={ <Monitor /> } />
        </Routes>
      </Router>
  )
}

export default App