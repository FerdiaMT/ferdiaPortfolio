import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import Home from './components/home.jsx'
import Layout from './components/Layout.jsx'
import Projects from './components/Projects.jsx'
import Cyrillic from './components/Cyrillic.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cyrillic" element={<Cyrillic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

export default App
