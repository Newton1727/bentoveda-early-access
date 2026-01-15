import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import IndianLine from '../components/IndianLine'
import GlobalLine from '../components/GlobalLine'
import EmailForm from '../components/EmailForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <IndianLine/>
        <GlobalLine/>
        <EmailForm/>
        <Footer/>
    </div>
  )
}

export default Home