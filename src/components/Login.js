import React, {useState} from 'react';
import { BaseButton} from "../components";
import {AiFillStar , AiOutlineContacts} from "react-icons/ai";
import {FaPencilAlt} from "react-icons/fa";
import "./login.css";
import {auth} from "../data/firebase.config";
import {signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"
//import {auth} from "../data/firebase.config";
//import { onAuthStateChanged } from 'firebase/auth';

const Login = () => {
     const [logedInEmail , setLogedInEmail] = useState("");
     const [logedInPassword , setLogedInPassword] = useState("")
     const navigateto = useNavigate();
    
     const logIn= async (e)=>{
      e.preventDefault();
      await signInWithEmailAndPassword(auth , logedInEmail , logedInPassword);
       navigateto("/infos")

     }
    
  return (
    <div className='container'>
    
    <div className='login-box'>
    <h3> Einloggen</h3>
    <hr/>
    <form>
      <div className='email-box'>
      <label>E-mail :</label>
      <input  placeholder='Enter your Email' value={logedInEmail} 
      onChange={(e)=> setLogedInEmail(e.target.value)}/>
      </div>
      <div  className='password-box'>
      <label>Password :</label>
      <input  placeholder='Enter your Password' value={logedInPassword}  
      onChange={(e)=>setLogedInPassword(e.target.value) } />
      </div>
      <p className='password-vergessen '>Passwort vergessen?</p>
      <button type='submit' onClick={ logIn}
       style={{ padding:"4px 8px" , backgroundColor:"green" ,color:"white" , fontFamily:"bold"
       }}>
         Einloggen</button>
    </form>
   </div>


   <div className='register-box'>
    {
    
   <>
     <h3> Noch nicht registriert ? </h3>
    <hr/>
    <ul>
      <li> <AiFillStar/> Überall verfügbare Merkliste </li>
      <li> <AiOutlineContacts/> Nachrichten überall lesen und beantworten </li>
      <li> <FaPencilAlt/> Einfaches Verwalten und Bearbeiten von Anzeigen  </li>
    </ul>
    <BaseButton   text="In 30 Sekunden registrieren "/>
   </> 
    }
   </div>
       
   
  </div>)
}
export default Login
