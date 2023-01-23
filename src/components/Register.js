import React , {useState} from 'react';
import {AiFillStar , AiOutlineContacts} from "react-icons/ai";
import {FaPencilAlt} from "react-icons/fa";
import "./Register.css" ;
import {auth} from "../data/firebase.config";
import { createUserWithEmailAndPassword , onAuthStateChanged } from 'firebase/auth';


const Register = () => {
  //  state management
  const  [userEmail , setUserEmail] = useState("");
  const  [userPassword ,  setUserPassword ]  = useState("");
  const [logedUser , setLogedUser]   = useState({});
  // submit handler

  const submitHandler = async (e)=>{
    e.preventDefault();
   await createUserWithEmailAndPassword(auth,userEmail , userPassword );

  }
  
  // currentuser handler
  onAuthStateChanged(auth, (currentUser)=>{
    currentUser &&  setLogedUser(currentUser);
    console.log(logedUser)
  })

  // app return
  return (
    <div className='container'>
      
    <div className='register-box'>
    <h3> Registrieren in 30 Sekunden
    </h3>
    <hr/>
    <form  onSubmit={submitHandler}>
      <div className='email-box'>
      <label>E-mail :</label>
      <input  placeholder='Enter your Email' value={userEmail}  onChange={ (e)=> setUserEmail(e.target.value) } />
      </div>
      <div  className='password-box'>
      <label>Password :</label>
      <input  placeholder='Enter your Password' value={userPassword}  onChange={ (e)=> setUserPassword(e.target.value) } />
      </div>
        <p className='Nutzungsbedingungen'>Es gelten unsere Nutzungsbedingungen . Informationen zur Verarbeitung Deiner Daten findest Du in unserer Datenschutzerklärung.</p>
        <div  className='bedinregel'>
        <input type="checkbox"  id=" " name="regel"/>
        <p>
        Ja, zu regelmäßigen Mails von uns mit Produktinfos, Tipps, Aktionen und spannenden Geschichten über uns   und mobile.de - Abmelden geht jederzeit
        </p>
        </div>
         <button type='submit'>Kostenlos registrieren</button>
    
    </form>
    
  </div>
  
  <div className='register-register-box'>
    <hr/>
    
    <ul>
      
      <li> <AiFillStar/> Überall verfügbare Merkliste </li>
      <li> <AiOutlineContacts/> Nachrichten überall lesen und beantworten </li>
      <li> <FaPencilAlt/> Einfaches Verwalten und Bearbeiten von Anzeigen  </li>
      
    </ul>
    
    </div>
    </div>
  )
}

export default Register
