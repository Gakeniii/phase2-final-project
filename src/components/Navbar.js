import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import Profile from '../images/moringa-dp.jpeg'


function Navbar(){
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return  (
    <>
      <header id="navbar">
          <h1 id="nav-header">Schedualy</h1>
          <nav ref={navRef}>
            <Link to="/home"> Home </Link>
            <Link to="/patients"> Patients</Link>
            <Link to="/add-patient">Add Patient</Link>
            <Link to="/about">About Us</Link>
            
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
      </header>
      <div className="profile">
        <button className="p-name">Dr. Gakeni</button>
        <img src={Profile} alt="Profile Image" className="profile-pic" />
      </div>
    </>
  )
};

export default Navbar;