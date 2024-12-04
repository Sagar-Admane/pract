import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App/App'
import About from '../Component/About/About'
import Blog from '../Component/Blog/Blog'
import Shop from '../Component/Shop/Shop'
import Checkout from '../Component/CheckOut/Checkout'
import Last from '../Component/Last/Last'
import Contact from '../Component/Contact/Contact'

function App1() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path : "/about",
            element : <About />
        },
        {
            path : "/blog",
            element : <Blog />
        },
        {
            path: "/shop",
            element : <Shop />
        },
        {
            path : "/contact",
            element : <Contact />
        },
        {
            path : "/checkout",
            element : <Checkout />
        },
        {
            path : "/last",
            element: <Last />
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App1
