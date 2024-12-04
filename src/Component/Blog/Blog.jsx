import React from 'react'
import style from "./blog.module.scss"
import fresh from "../../assets/FRESH.png"
import Navbar from '../Navabr/Navbar'

function Blog() {
  return (
    <>
    <Navbar />
    <div id='section3' className={style.container}>
      <div className={style.heading}>
        <div className={style.head1}>
            <h2>Know Our Features</h2>
        </div>
        <div className={style.head2}>
            <h1>DISCOVER <span>THE FEATURES!</span></h1>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.main1}>
            <div className={style.mn1}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABHhJREFUaEPtmXmoV0UUxz9C/hGlJaQiZJZp+IcSYoGgKUELuYdrVoJWpCCmWRFlCxSZihsiglBkllJqEWiCmmuJlZUVYVDQIkEbZe6GovOFuXKcN/fe+b3f/T144IEHj3vP3PnMmTNnmV8bWqG0aYXMXIJuqV1raUuPBPoD1wKdgMPAT8A+4CPgaMrCWwK6C/A08CDQoQTqTWA+8F2RXiOhLweeAp4ErkixoNc5BUwC1uWNaRT09cBWoEcNsKHqaOC92PhGQA8G3s9xBT3fBHwOfOOB5OOPARMCwBNAP/f8+xC8auh7gA8j1lkEzAP+LLD8IOAD4Gqj8y4wvpHQQ4GNEaghwOZEN3kAWB3odgN+tc+qsvSdftvbRuBkvTHAmUTwH4KzMBl4o2roPAvbeeTHwxKhX3B6LxrdpS6ez6wSOgb8LbAXeDSA3OHBdcCK5D5gjVF4Jzyk9bhHzCWU2e4GjgArgUcCOr2/w8Xu4wXUiiJrzXv9P7EKS8eixJfAQOCkmWBxuLXO2vud/99aAD0VWGHevwY8XC903qH738Vfucu2AGgZMN08ewh4vQA63KHHAS3+gtTqHmWHTlaWe+wJoBYAT3j45SU+rQJKGTUTJavdzYWOAX8NdAfamY8e8377aQB3O6DDWCTS2W4U/gY6hgNSLS2X2BIMPuh9+DpgF9DevP/PTa4Ml6XqEtYLr/UdjctkLvBMc6BvC7cH+NEVRANMWu7r62Fbev7jF6XFpcgoX7NkugqNNwK/1wrdFVBUuCYY+ArwbPDsZmBnUDs8D7yUQHwT8Jk7cFcZ3dlu91SzNJEy91A1dkvOpDpYC4N3ffyuqOh5Dng5Abgz8Im3aqb+RcG8hY2tUudFoSYCELOGwBWvbazNY1dXIz/uaRT+ddWe3O2XvEF5ltbq5bdXmoH3+sw0NvhYkziaYF2pCFihUX5rRSEzPPQXKeRBa1utz6pcVAskUTehBViZ5Xx5SSKs1GSUjyOdzbiiNiv7fh70H75bzvTUPf9moNSB6LRb6V3WkHrluoD1jRh0GOKa5H53wC4DNrjIMgI45/xPNe+qBEsLWBWgElImZ91i5XIyRJLEoGe4/k41bCZN0qh5J1dRFZbbORtd+bDScdjsJrmEXU0MOixYdBWgtr4eqdslyqDfAu73SodcRaY0XY9U4hJl0G+bovtn56s31EFcmUuUQSvtzvFKOiS6HTrdDPDKLZwxxHxaMdje7KiTVqSoRdT2qxmo+9DFJo1Bq2jRbWYmuuFRRaeqLUVUxuqSxV66aJzC2vqUD5Tp5CUXxeYpZrCK/eGADmaeqJ5+FZgWUagMWN/Og1YBo5LU1h6qb7UYXSwe8LuhQ9rLdSSK5XIj3TlbUdetay3de1QmRaWpOm5NVla+5sH85bLfXX6BlQEXWTqbRCldxZIOVqooretyXPfSAq9cUqyojKgwqNq5SNSEKmLoykD1RcMkBTqbXFFF98XqZPSnDlw/M6gH/MqfgYaB2g/XAt0iQCmTXIJOsVIVOq3S0ucBbJ7KLmshJzwAAAAASUVORK5CYII=" alt="" />
                <h3>Natural Ingredients</h3>
                <p>We use only natural ingrdients from international producer</p>
            </div>
            <div className={style.mn2}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAA0lJREFUaEPtmEnIjlEUx38fGTIkc1iQorCQIWzMLMwbZVpQSAiZipQhUiLzVCiUOQvjQuYFGReSBQtDGTYihYWU+6/7ft1uz33f53m/5308X72nvsX33nPv/d3znHPuObeGeig19ZCZKnSMr9Ye6AY8iaEbVMnK0u2ALcACS/IduAGcBy4mPUAW0KuB9UCLANxnYBewPS58JaHHW5ieMWHkMrPM35tS+pWA7gHsAcZFbP4TOAVMAjoFxkcAT4uBpwndCtgMLAlseBZYYfxa7iAZBcwFZnr68vfhwIsQeBrQDYD5FljZwZdXwEIDeT8A0ddav48z/sUEaW/gW9ScukLLIgftBv76coWNJgB3lPJRO34EmOfoXjepcUKa0F0tzNQA0GlgJSCLxZXGwEtjdcVEQaYAl/0Fklq6GbAWWAU0LcMVSh1gMPAQam/q58CAukArHW0DukTs/MO6wl7gbymyEuO6dMY6OhOBa+6cOJbWSQ8AskKUKIXJ8klcoRj3YmC/o3DGzzDFoDtYy852Ppe7mbKCssaDOlrWn97ZrPvR+fEt0L2UpRvZIFoXuHrlChuAfSm4Qui8z0wA9ncGFaR/Cv9HWdr3qZQNWdZyylYfQtD9AEVs3mSIKQsehaBHArfzRgyI624IWsXKHQf6PfDuPxxCjYJcoiBFoX1LbzKzdBVnLdpTwZ4Z9GRAsfEaUI4tRzKF3m0qs2UO5TlgehnUmUGr0JF1fRkD3EoInhn0MBPl9yLgdKOezCt0E9uVtPYA1SP6fZ9u3TXmCwwFfptK7gpw1JmXmaW1p4JQlZ7SlboOdeLHvEO0tDnXvaalcsKk1zlWNzXoGcBSU3O0NdnhkgUKfXXl2VB+3wksD0xUU6F3kFSgRwM3vY0OAYsS+qrUVR32Csw7bPvJVKDVB6o5deWXeWBpnmdovWPINVyRz7YpAzoz9xgY8Wi41dS4qrmTSqaBqDwsH5Z1r9oskRS4oJ+rlFfuIfx5iQLRL02VO4+nRZJgHeVr3aQFSVSaJtinoqpFoQe5bU1FMZItrueLx4UpfmPb0Lx6fjXvynoBzYuIp6Pb+Ud143p3mJYTcN0FF4BPrgXjvDDlxeK1HFXorD5J1dJZWfofKt69LuMTsJMAAAAASUVORK5CYII=" alt="" />
                <h3>Cheesy Items</h3>
                <p>The items are more chessy and more flovoured.</p>
            </div>
        </div>
        <div className={style.main2}>
            <img src={fresh} alt="" />
        </div>
        <div className={style.main3}>
            <div className={style.mi1}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAArFJREFUaEPtmEvoTVEUxn9/iQGSmVcx8FYoJgw8MhB5ZGSgvEVSKCWlMJOiJCF5lYyUV0IGHgMpE0UiIpRkJAqlZH9aR9tpn+c9597uv7Nm9571+Pa31l577d1DF0pPF2KmAW1ZGwpM8DL4AvhUZUbrYHoNcNYDuRY414CukgHz1TAdIrVX1vR4YAXQp0AZTQOWefpXgScF7H8DF4HXSTZJTA8CjgMrCwSrWlUdZwvwI+44BFqA7wLTq0ZRwt9DYD7w07cNgT5mKywRoxaTA8DuNNADgW+x0EeAG8CvWiD977QfsAjY5v39BRiSBnomoJREcgVY3gaw8RCK62/mKcDTSCleHnOtnqPv+4D9HQCtuHu9uPOAew3oGjLRMF0DqUGXLTGtdre9BNJRwDDgI/C+hP1RYGvZjSg7zQ1q7rcygo8F9liL1KkayVfgknWhrAWozalbTY3FKtQ9fNuT7tq0OQH4BuBUxqK+AxttGAqpngdWJfgoDVr+1PTl2D81TwCbCpSAxgQ/9YOBC8DiFB8tgZZfpfumDTFL40esBRbrqufhxm4cjy661812ITAgY9GFQJ92l9LRNmnlIfO+23jrXDbeeMqqdY2Zs/I4AO7Y5l1fdiNqU6j97AI0baXJQdNL0jkM7MjwsRM4ZDFLH+MRaMUaY6leAky04K9sAlRGnuVgUrcaMSgfaosSDULXgDNehlrq0z5oH5NqtT/wNgfQJJVx7gzQ2Pk5oFAL6Baw5jJtQOeiqQKl3s/0bEC9NhIdrZU+HubMgp7WVnu6c4AH0e/4dWuka0kfcjpup9oIO2H/xgw9ITwGZrQTUUasR4Au3P8kBHqyU7rtpjatrtPyDlgAvMwCre8aYKQ8CejbAeR6Y3nu5urLodh1vJrWvsYGdO0UW4CG6YbpFAa6sjz+ALH0nS6Pu5YwAAAAAElFTkSuQmCC" alt="" />
                <h3>Exquistie Taste</h3>
                <p>Best Taste and Quality in the Market!</p>
            </div>
            <div className={style.mi2}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABHhJREFUaEPtmXmoV0UUxz9C/hGlJaQiZJZp+IcSYoGgKUELuYdrVoJWpCCmWRFlCxSZihsiglBkllJqEWiCmmuJlZUVYVDQIkEbZe6GovOFuXKcN/fe+b3f/T144IEHj3vP3PnMmTNnmV8bWqG0aYXMXIJuqV1raUuPBPoD1wKdgMPAT8A+4CPgaMrCWwK6C/A08CDQoQTqTWA+8F2RXiOhLweeAp4ErkixoNc5BUwC1uWNaRT09cBWoEcNsKHqaOC92PhGQA8G3s9xBT3fBHwOfOOB5OOPARMCwBNAP/f8+xC8auh7gA8j1lkEzAP+LLD8IOAD4Gqj8y4wvpHQQ4GNEaghwOZEN3kAWB3odgN+tc+qsvSdftvbRuBkvTHAmUTwH4KzMBl4o2roPAvbeeTHwxKhX3B6LxrdpS6ez6wSOgb8LbAXeDSA3OHBdcCK5D5gjVF4Jzyk9bhHzCWU2e4GjgArgUcCOr2/w8Xu4wXUiiJrzXv9P7EKS8eixJfAQOCkmWBxuLXO2vud/99aAD0VWGHevwY8XC903qH738Vfucu2AGgZMN08ewh4vQA63KHHAS3+gtTqHmWHTlaWe+wJoBYAT3j45SU+rQJKGTUTJavdzYWOAX8NdAfamY8e8377aQB3O6DDWCTS2W4U/gY6hgNSLS2X2BIMPuh9+DpgF9DevP/PTa4Ml6XqEtYLr/UdjctkLvBMc6BvC7cH+NEVRANMWu7r62Fbev7jF6XFpcgoX7NkugqNNwK/1wrdFVBUuCYY+ArwbPDsZmBnUDs8D7yUQHwT8Jk7cFcZ3dlu91SzNJEy91A1dkvOpDpYC4N3ffyuqOh5Dng5Abgz8Im3aqb+RcG8hY2tUudFoSYCELOGwBWvbazNY1dXIz/uaRT+ddWe3O2XvEF5ltbq5bdXmoH3+sw0NvhYkziaYF2pCFihUX5rRSEzPPQXKeRBa1utz6pcVAskUTehBViZ5Xx5SSKs1GSUjyOdzbiiNiv7fh70H75bzvTUPf9moNSB6LRb6V3WkHrluoD1jRh0GOKa5H53wC4DNrjIMgI45/xPNe+qBEsLWBWgElImZ91i5XIyRJLEoGe4/k41bCZN0qh5J1dRFZbbORtd+bDScdjsJrmEXU0MOixYdBWgtr4eqdslyqDfAu73SodcRaY0XY9U4hJl0G+bovtn56s31EFcmUuUQSvtzvFKOiS6HTrdDPDKLZwxxHxaMdje7KiTVqSoRdT2qxmo+9DFJo1Bq2jRbWYmuuFRRaeqLUVUxuqSxV66aJzC2vqUD5Tp5CUXxeYpZrCK/eGADmaeqJ5+FZgWUagMWN/Og1YBo5LU1h6qb7UYXSwe8LuhQ9rLdSSK5XIj3TlbUdetay3de1QmRaWpOm5NVla+5sH85bLfXX6BlQEXWTqbRCldxZIOVqooretyXPfSAq9cUqyojKgwqNq5SNSEKmLoykD1RcMkBTqbXFFF98XqZPSnDlw/M6gH/MqfgYaB2g/XAt0iQCmTXIJOsVIVOq3S0ucBbJ7KLmshJzwAAAAASUVORK5CYII=" alt="" />
                <h3>All Types Of Bread</h3>
                <p>All types of breads are available and of good quality</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog
