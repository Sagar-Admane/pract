
import style from "./checkout.module.scss"
import Navbar from '../Navabr/Navbar'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
  
    function handleClick(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        var cartList = document.getElementById('cart-items');
            cartList.innerHTML = '';
            cart.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item.item + ' ' + item.price;
                cartList.appendChild(li);
            });
    }

    

    useEffect(()=>{
        handleClick();
    }, [])

    var oid = [];
    let sagar = [];
    let arr = [];
    function genOID(){
            
            sagar = JSON.parse(localStorage.getItem('cart'));
            addToArr();
            let orderId = generateOrderId();
            localStorage.setItem('orderId', orderId);
            console.log(orderId);
            alert('Your order has been placed! Your Order ID is: ' + orderId);
            localStorage.removeItem('cart');
            oid.push(orderId);
            console.log("Logged"+arr)

            fetch("http://localhost:3001/api/user/checkout",{
              headers : {
                'Content-Type' : "application/json"
              },
              body : JSON.stringify({
                orderId,
                arr
              }),
              method: "POST",
            }).then((res)=> res.json()).then((data)=>{
              console.log(data);
              if(data?.success === 201){
                toast.success("Order Placed Successfully");
              } else toast.error(data?.message);
            }).catch((error)=>{
              console.log(error);
            })
    }

    function addToArr(){
      sagar.map((v)=>{
        arr.push(v.item);
      })
    }

  
    function generateOrderId() {
        
        return Math.random().toString(36).substr(2, 9); 
    }

  return (
    <>

<ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
     
      <div className={style.container}>
      <Navbar />
      <div className={style.button}>
      <button className="button-54 abc">Order Confirmation</button>
      </div>
      
      <div className={style.content}>
        
        <div className={style.content2}>
        <ul id='cart-items'>

        </ul>
        <div className={style.Checkout}>
            <Link to="/last"><button className="button-54" onClick={() => genOID()}>Checkout</button></Link>
        </div>
        
        </div>
        
      </div>
      
      </div>
     
    </>
  )
}

export default Checkout
