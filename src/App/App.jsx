import React from 'react'
import style from "./app.module.scss"
import Navbar from '../Component/Navabr/Navbar'
import Hero from '../Component/Hero/Hero'
import About from '../Component/About/About'
import Blog from '../Component/Blog/Blog'
import Shop from '../Component/Shop/Shop'
import Footer from '../Component/Footer/Footer'

function App() {
  return (
    <div className={style.container1} >
      <div className={style.container}>
        <Navbar />
      </div>
      <Hero />
      {/* <About />
      <Shop />
      <Blog /> */}
      <Footer />
    </div>
  )
}

export default App
