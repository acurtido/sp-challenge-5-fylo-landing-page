import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StayProductive from './components/StayProductive'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Hero />
    <StayProductive />
    <Footer />
  </React.StrictMode>,
)
