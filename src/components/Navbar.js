import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import { useRef } from 'react';


function Navbar(){
  const navRef = useRef();

  function showNavBar(){
    navRef.current.classList.toggle("responsive_nav")
  }

  return  (
    <header id="navbar">
      <h1>Schedualy</h1>
      <nav ref={navRef}>
        <Link to="/"> Home </Link>
        <Link to="/about">About Us</Link>
        <Link to="/patients"> Patients</Link>
        <Link to="/add-patient">Add Patient</Link>
        
        <button className='nav-btn nav-close-btn' onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
  </header>
  )
};

export default Navbar;