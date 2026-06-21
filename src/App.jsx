import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Credentials from './components/Credentials'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-zinc-950 text-white font-body">
      <Navbar />
      <Portfolio />
      <Hero />
      <Welcome />
      <Credentials />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
