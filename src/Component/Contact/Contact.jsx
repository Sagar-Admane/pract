import React, { useState } from 'react'
import style from "./contact.module.scss"
import Navbar from '../Navabr/Navbar'
import {toast} from "react-toastify"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  function handleSubmit(e){
    
    if(!name.length || !email.length || !review.length) toast.error("Some fields are empty");

    fetch("http://localhost:3001/api/user/feedback",{
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        review
      }),
      method: "POST",
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      if(data?.success === 201){
        toast.success("Message send successfully");
        console.log(data);
      }
      else toast.error(data?.message);
    }).catch((error) => {
      console.log(error);
      toast.error("Something went wrong");
    })

    e.preventDefault();
    
  }

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <Navbar />
      </div>
      <ToastContainer />
      <div className={style.contact}>
        <button className="button-54">FEEDBACK</button>
        <form action='post'>
        <div className={style.form}>
            <input type="text" placeholder='Enter Your Name' name="" id="" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Enter Your Email' name="" id="" onChange={(e)=> setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Your Review' name="" id="" onChange={(e) => setReview(e.target.value)} />
            <button className={style.button} onClick={handleSubmit}>Submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
