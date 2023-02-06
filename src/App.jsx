import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'



const App = () => {
    return (
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route index='Home' element={<Home/>} />
                <Route path='About' element={<About/>} />
                <Route path='Contact' element={<Contact/>} />
            </Routes>
            <Footer />
       </BrowserRouter>
    )
}

export default App