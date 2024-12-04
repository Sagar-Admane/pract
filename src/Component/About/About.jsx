import React from 'react'
import style from "./about.module.scss";
import img1 from "../../assets/Thomas Miller.png"
import img2 from "../../assets/pastry.png"
import img3 from "../../assets/COOKIES.png"
import Navbar from "../Navabr/Navbar.jsx"

function About() {
  return (
    <>
    <Navbar />
    <div id='section2' className={style.container}>
      <div className={style.btn}>
        <button className='button-54'>ABOUT US</button>
      </div>
      <div className={style.img}>
        <div className={style.img1}>
           <img src={img1} alt="" /> 
        </div>
        <div className={style.img2}>
            <img src={img2} alt="" />
        </div>
        <div className={style.img3}>
            <img src={img3} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About
