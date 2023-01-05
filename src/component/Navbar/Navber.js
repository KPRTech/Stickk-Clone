import React from 'react';
import './Navbar.css';
import NavBarLogo from '../../Assets/logo-commit.svg'

const Navber = () => {
  return (
    <>
      <nav>
        <div className="nav_container">
          <div className="nav_content">
          <div className="logo">
            <div className="navBarLogo">
              <img src={NavBarLogo} alt="" />
            </div>
          </div>
          <div className="nav_links">
            <a href="#">HOW IT WORKS</a>
            <a href="#">ABOUT US</a>
            <a href="#">HELP CENTER</a>
            <button className='signInButton'>SIGN IN</button>
            <button className='registerButton'>REGISTER</button>
          </div>
          </div>
          <div className="new_links">
            <a href="#">For Individuals</a>
            <div className='line'></div>
            <a href="#">For Groups</a>
            <div className='line'></div>
            <a href="#">For WorkPlaces</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navber