import React , {useState} from 'react';
import  "./profilebox.css";
import {BsClipboardPlus} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom" ;
const ProfileBox = () => {
  const [displayMenu , setDisplayMenu  ] = useState(false)
  return (
    <div className='profile-box' >
      <p className='anzeige'>
      <BsClipboardPlus /> 
      <Link to ="/publish">
      Anzeige aufgeben   
      </Link>
      </p> 
      <span>|</span>
      <div className='profile' onClick={()=>{
         setDisplayMenu(!displayMenu);
         setTimeout(()=>{
          setDisplayMenu(false)
         },10000)
      }}>
        <AiOutlineUser/>
        Meins
      </div>
      {
        displayMenu && 
        <ul className='profile__links'>
        <li><Link to ="/infos">Infos</Link></li>
        <li> Nachrichten</li>
        <li>Einstellung</li>
        <li>Favorite</li>
      </ul>
      }
    </div>
  )
}

export default ProfileBox
