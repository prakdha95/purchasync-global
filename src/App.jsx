import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blogs/Blogs'
import Contact from './pages/Contact/Contact'
import Marketing from './pages/Marketing/Marketing'
import IT from './pages/IT/IT'
import Procurement from './pages/Procurement/Procurement'
import Sales from './pages/Sales/Sales'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/blogs' element={ <Blogs/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/marketing' element={ <Marketing/>} />
        <Route path='/it' element={ <IT/>} />
        <Route path='/procurement' element={ <Procurement/>} />
        <Route path='/sales' element={ <Sales/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
