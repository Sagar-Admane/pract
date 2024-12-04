import React from 'react'
import style from "./navbar.module.scss"
import logo from "../../assets/logo.png"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="" height={160} width={160} />
      </div>
      <div className={style.anchor}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/shop"><Icon icon="ic:sharp-shopping-bag" /><button>OUR SHOP</button></Link>
      </div>
    </div>
  )
}

export default Navbar
