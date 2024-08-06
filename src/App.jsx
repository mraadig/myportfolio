import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import MySkills from './Components/MySkills';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ContactForm from './Components/Contact';
const App = () => {
  return (
    <>
    <div className="App">
    <Header/>
    <Body/>
    <MySkills/>
    <About/>
    <Portfolio/>
    <ContactForm/> <Footer/>
    </div>
    </>
  )
}

export default App