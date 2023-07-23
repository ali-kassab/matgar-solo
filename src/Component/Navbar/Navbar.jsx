import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { useState } from 'react'

export default function Navbar({ userdata, Clearuserdata }) {

  const [scrollColor, setscrollColor] = useState(false);

  function scrollchange() {
    if (window.scrollY >= '100') {
      setscrollColor(true)
    } else {
      setscrollColor(false)
    }
  }
  window.addEventListener('scroll', scrollchange)

  return <>

    <nav className={scrollColor ? 'navchangecolor  navbar navbar-expand-lg bg-body-tertiary' : 'navbar navbar-expand-lg bg-body-tertiary'}>
      <div className="container">
        <Link className={scrollColor ? ' navbar-brand' : "navbar-brand "} to="/home">solo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-right  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={scrollColor ? ' nav-link active' : "nav-link active textUnderLine"} aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={scrollColor ? ' nav-link text-color' : "nav-link"} to="/brands">Brands</Link>
            </li>
            <li className="nav-item">
              <Link className={scrollColor ? ' nav-link' : "nav-link"} to="/cart">Cart <i class="fa-solid fa-cart-shopping"></i></Link>
            </li>
          </ul>
          <ul className="navbar-nav nav-left ms-auto mb-2 mb-lg-0">


            {userdata ? <>



              <li className="nav-item">
                <Link className={scrollColor ? 'nav-link' : "nav-link"} to="/profile">profile <i class="fa-regular fa-user"></i></Link>
              </li>


              {/* <li className="nav-item">
             <span className='nav-link' onClick={logoutuser}>Logout</span>
             </li> */}


              <li className="nav-item">
                <Link onClick={Clearuserdata} className={scrollColor ? " nav-link" : 'nav-link'} to="/login">Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
              </li>

            </> : <>




              <li className="nav-item">
                <Link className={scrollColor ? ' nav-link active' : "nav-link active"} aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className={scrollColor ? ' nav-link' : "nav-link"} to="/Regester">Regester</Link>
              </li></>}





          </ul>

        </div>
      </div>
    </nav>


  </>
}

