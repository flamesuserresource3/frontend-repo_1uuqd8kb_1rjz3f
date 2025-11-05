import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <WorkGrid />
        <About />
        <ContactFooter />
      </main>
    </div>
  )
}

export default App
