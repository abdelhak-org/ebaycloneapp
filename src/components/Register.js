import React , {useState} from 'react';
import { BaseButton} from "../components";
import {AiFillStar , AiOutlineContacts} from "react-icons/ai";
import {FaPencilAlt} from "react-icons/fa";
import "./Register.css" ;
import {auth} from "../data/firebase.config";
import { createUserWithEmailAndPassword , onAuthStateChanged, signOut } from 'firebase/auth';
import {useNavigate} from "react-router-dom"



const Register = () => {
  const  [userEmail , setUserEmail] = useState("");
  const  [userPassword ,  setUserPassword ]  = useState("");
  const [logedInUser , setLogedInUser ] = useState({});
  

  const navigateto = useNavigate();

  onAuthStateChanged(auth , (currentUser)=>{
    setLogedInUser(currentUser)
  })

  const Register = async()=>{

// Create the user with the email and password
   createUserWithEmailAndPassword(auth, userEmail, userPassword)
  .then(user => {
    console.log(`Successfully created user with email: ${userEmail}`);
  })
  .catch(error => {
    console.error(error);
  });

  }
  const submitHandler =(e)=>{
    e.preventDefault();
    Register();
    navigateto("/infos")
    setUserEmail("");
    setUserPassword("")
  }
 const logOut=async ()=>{
     await signOut(auth)
 }






  return (
    <div className='container'>
      
    <div className='register-box'>
    <h3> Registrieren in 30 Sekunden
    </h3>
    <hr/>
    <form onSubmit={submitHandler }>
      <div className='email-box'>
      <label>E-mail :</label>
      <input  placeholder='Enter your Email' value={userEmail}  onChange={ (e)=> setUserEmail(e.target.value) } />
      </div>
      <div  className='password-box'>
      <label>Password :</label>
      <input  placeholder='Enter your Password' value={userPassword} onChange={ (e)=> setUserPassword(e.target.value) } />
      </div>
        <p className='Nutzungsbedingungen'>Es gelten unsere Nutzungsbedingungen . Informationen zur Verarbeitung Deiner Daten findest Du in unserer Datenschutzerklärung.</p>
        <div  className='bedinregel'>
        <input type="checkbox"  id=" " name="regeld"/>
        <p>
        Ja, zu regelmäßigen Mails von uns mit Produktinfos, Tipps, Aktionen und spannenden Geschichten über uns   und mobile.de - Abmelden geht jederzeit
        </p>
        </div>
      
      
      <BaseButton >Kostenlos registrieren</BaseButton>

    </form>
    
  </div>
  
  <div className='register-register-box'>
    <hr/>

    <ul>
      { logedInUser ?
      <> <p> welcome {logedInUser.email}</p>  <p onClick={logOut}>LogOut</p> </>
      : 
      
      <>
      
      <li> <AiFillStar/> Überall verfügbare Merkliste </li>
      <li> <AiOutlineContacts/> Nachrichten überall lesen und beantworten </li>
      <li> <FaPencilAlt/> Einfaches Verwalten und Bearbeiten von Anzeigen  </li>
      
      </>
      }
    
      
    </ul>

   </div>
    </div>
  )
}

export default Register
