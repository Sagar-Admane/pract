import React, { useEffect, useState } from 'react'
import style from "./last.module.scss"
import Navbar from '../Navabr/Navbar'

function Last() {

  const [oid, setOid] = useState("");

  useEffect(() => {
    handleClick();
  }, []);

  function handleClick(){
    var a = localStorage.getItem('orderId');
    console.log(a);
    setOid(a);
  }

  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.abc}>
        <button className='button-54'>Order Confirmed!!!</button>
      </div>
      <div className={style.order}>
        <div className={style.order1}>
          <h2>Thank You for using our Service.</h2>
          <h3>Do not share your Order Id. Please bring the order Id at the time of takeaway.</h3>
          <h2>Your Order has been placed.</h2>
          <br />
          <h3>Your Order Id is : {oid}</h3>
        </div>
      </div>
    </div>
  )
}

export default Last
