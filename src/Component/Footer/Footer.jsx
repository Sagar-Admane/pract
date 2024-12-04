import React from 'react'
import style from "./footer.module.scss"

function Footer() {
  return (
    <div id='section4' className={style.container}>
        
            <div className={style.AE}>
                <div className={style.address}>
                    <p>Address : </p>
                    <pre>Main Bazaar Dehra,<br />
                        Tehsil Dehra, Dehra,<br />
                        Jwalamukhi, Kangra, Himachal Pradesh - 177101<br />
                    </pre>
                </div>
                <div className={style.email}>
                    <div>
                    <input type="email" className={style.input} id="" placeholder='Enter Your Email' />
                    </div>
                    
                    <button className="button-54">Subscribe</button>
                </div>
            </div>
            <div className={style.copy}>
                <p>©️ 2024 SK Bakery. All rights reserved</p>
            </div>
       
    </div>
  )
}

export default Footer
