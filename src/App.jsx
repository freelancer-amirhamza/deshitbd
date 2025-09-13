import { useEffect, useState } from 'react'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marketing from './components/Marketing'
import Products from './components/Products'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

function App() {
      
  return (
    <div className=' grid  w-full mx-auto'>
      <Header  className={`fixed top-0 `} />
      <Hero />
      <Products />
      <Projects />
      <Marketing />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
