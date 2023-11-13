import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Hero />
  </React.StrictMode>,
)
