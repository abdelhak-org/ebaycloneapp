import React, {useState} from 'react';
import { BaseButton} from "../components";
import LogedIn from './LogedIn';
import {AiFillStar , AiOutlineContacts} from "react-icons/ai";
import {FaPencilAlt} from "react-icons/fa";
import "./login.css";
import { useNavigate } from 'react-router-dom';

import {auth} from "../data/firebase.config";
import { signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth';

const Login = () => {
     const [logedInEmail , setLogedInEmail] = useState("");
     const [logedInPassword , setLogedInPassword] = useState("")
     const [logedUser  , setLogedUser] = useState({});
     
     onAuthStateChanged(auth , (currentUser)=>{
       setLogedUser(currentUser)
     })

  const LoginHandler = async(e)=>{
   
     e.preventDefault();
    // Create the user with the email and password
     signInWithEmailAndPassword(auth, logedInEmail, logedInPassword )
  .then(user => {
    console.log(`Successfully created user with email: ${logedInEmail}`);
    setLogedInEmail("");
    setLogedInPassword("");
  })
  .catch(error => {
    console.error(error);
  });

  }
  const logout = async()=>{
   await signOut(auth);
  }
  const navigate = useNavigate()
  return (
    <div className='container'>

       {
        
    !logedUser? 

       <>
    <div className='login-box'>
    <h3> Einloggen</h3>
    <hr/>
    <form>
      <div className='email-box'>
      <label>E-mail :</label>
      <input  placeholder='Enter your Email' value={logedInEmail} onChange={(e)=> setLogedInEmail(e.target.value)}/>
      </div>
      <div  className='password-box'>
      <label>Password :</label>
      <input  placeholder='Enter your Password' value={logedInPassword} onChange={(e)=> setLogedInPassword(e.target.value)}/>
      </div>
      <p className='password-vergessen '>Passwort vergessen?</p>
      <button  onClick={ LoginHandler}>Einloggen</button>
    </form>
   </div>


   <div className='register-box'>
    <h3> Noch nicht registriert ? </h3>
    <hr/>
    <ul>
      <li> <AiFillStar/> Überall verfügbare Merkliste </li>
      <li> <AiOutlineContacts/> Nachrichten überall lesen und beantworten </li>
      <li> <FaPencilAlt/> Einfaches Verwalten und Bearbeiten von Anzeigen  </li>
    </ul>
    <BaseButton  onClick={()=> navigate("/register")}> In 30 Sekunden registrieren </BaseButton>
  
   </div>
   </>
   :
  
   <LogedIn logedin={logedUser} logout={logout}/>

   }
   
  </div>)
}
export default Login
