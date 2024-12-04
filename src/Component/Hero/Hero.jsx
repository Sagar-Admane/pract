import React, { useEffect, useRef } from 'react'
import style from "./hero.module.scss"
import Typed from "typed.js"
import img1 from "../../assets/xyz.png"
import img2 from "../../assets/cakes.png"
import "./hero.css"
import Navbar from '../Navabr/Navbar'
import { Link } from 'react-router-dom'

function Hero() {
    
    const typedEle = useRef(null); 
    useEffect(() => {
        const typed = new Typed(typedEle.current, {
            strings: ["S. K. Bakery"],
            typeSpeed : 70,
            backSpeed: 70,
            loop: true
        });

        return() => {
            typed.destroy();
        };
    }, []);

  return (
    <div id='section1' className={style.container}>
    <div className={style.hero}>
        <div className={style.img1}>
            <img src={img1} alt="" />
        </div>
        <div className={style.img3}><h1><span ref={typedEle}></span></h1></div>
        <div className={style.img2}>
            <img src={img2} alt="" />
        </div>
    </div>
    <div className={style.btn}>
        <Link to="/shop">
        <button className="button-54" >VISIT OUR SHOP!</button>
        </Link>
    </div>
    </div>
  )
}

export default Hero
