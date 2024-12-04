import React from 'react'
import style from "./shop.module.scss"
import data from "./ProductData.json"
import Navbar from '../Navabr/Navbar'
import { Link } from 'react-router-dom';


function Shop() {

  let car = [];

  function addToCart(item, price){
            var cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ item: item, price: price });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Item added to cart!');
            car.push(item);
            console.log(car);
  }

  return (
    <>
    <Navbar />
    <div id='section5' className={style.container}>
      <div className={style.heading}>
        <div className={style.head1}>
          <h3>Popular Bakery Product</h3>
        </div>
        <div className={style.head2}>
          <p><span>Delightful</span> Temptaions!</p>
        </div>
      </div>
      <div className={style.main}>
        {
          data.map((item, index) => {
            
              return(
                <div key={index} className={style.main1} style={{backgroundColor: "#FFF5EB"}}>
                  <div className={style.mn1} style={{backgroundColor : "#FFF5EB"}}>
                    <p>{item.name}</p>
                    <img src={item.img} alt={item.img} height={200} width={250} />
                  </div>
                  <div className={style.mn2}>
                    <p>{item.price}</p>
                    <button className={style.button} style={{backgroundColor : "#F1B2A8"}} onClick={() => addToCart(item.name, item.price)} ><p>Buy Now</p></button>
                  </div>
                </div>
              )
            
           
          })
        }
      </div>
      <div className={style.footer}>
        <Link to="/checkout"><button className='button-54'>Proceed To Checkout</button></Link>
      </div>
    </div>
    </>
  )
}

export default Shop
