import React from 'react'
import Header from './components/Header/Header.jsx'
import Description from './components/Description/Description.jsx'
import About from './components/About Me/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="container">
      <div className="heading-section">
        <Header />
      </div>
      <div className='description-section'>
        <Description />
      </div>
      <div className='about-section'>
        <About />
      </div>
      <div className='contact-section'>
        <Contact />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
