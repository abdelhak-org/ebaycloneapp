import React , { useState , useEffect} from  'react';
import "./displayinfos.css";
import {auth} from "../data/firebase.config";
import { onAuthStateChanged, signOut } from 'firebase/auth';


const DisplayInfos = () => {
  const [data  , setData] = useState({});
  
  


   useEffect(()=>{
    onAuthStateChanged(auth , (currentUser)=>{
     setData(currentUser);
    })

   })
   const logOut = async()=>{
    signOut(auth)
  }

  return (
    <div className="info-box">

      <h3> my Profile   </h3>
      {data?
      <>
      <p>{data.email}</p>
      <p  onClick={logOut}
      style={{fontSize:"18px ",cursor:"pointer", fontWeight:"bold" ,color:"#333", marginTop:"16px"}}> Logout</p>
      </>
      : ""


      }
    
    
    </div>
  )
}



export default DisplayInfos
