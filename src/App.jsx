
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marketing from './components/Marketing'
import Products from './components/Products'
import Projects from './components/Projects'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='flex bg-white gap-10 flex-col h-full w-full '>
      <Header />
      <Hero />
      <About/>
      <Products />
      <Projects />
      <Marketing />
      <Technology/>
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
