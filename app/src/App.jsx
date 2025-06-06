import './styles/App.css'

import Seo from './components/Seo.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {

  return (
    <>
      <Seo />
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
