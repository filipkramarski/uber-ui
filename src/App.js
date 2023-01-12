import React from 'react'
import BecomeUber from './components/becomeUber/BecomeUber'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import GetUber from './components/getUber/GetUber'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <React.Fragment>
            <Nav />
            <BecomeUber />
            <GetUber />
            <About />
            <Footer />
    </React.Fragment>
  )
}

export default App