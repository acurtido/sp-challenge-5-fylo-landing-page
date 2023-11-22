import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import StayProductive from './components/StayProductive'
import Footer from './components/Footer'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import EarlyAccess from './components/EarlyAccess'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Hero />
    <Features />
    <StayProductive />
    <Testimonials />
    <EarlyAccess />
    <Footer />
  </React.StrictMode>,
)
