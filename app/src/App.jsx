import './styles/App.css'

import Seo from './components/Seo.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <>
      <Seo />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
