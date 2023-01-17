import React  from 'react' ;
import "./Navbar.css"
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar__wrapper'>
      <Link to ="/">
      <img className='logo' src={logo} alt='logo'/> 
      </Link>
      <div className='nabbar__links'>
          <Link  to ="/register" className='linkcomp' >
          Registrieren 
          </Link>
          
          <span className='oder'>Oder </span>
          <Link to ="/login" className='linkcomp' >  Einloggen  </Link>


      </div>
    </div>
  )
}

export default Navbar
