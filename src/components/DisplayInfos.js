import React , { useState , useEffect} from  'react';
import "./displayinfos.css";
import {collection ,getDocs  } from "firebase/firestore" ;
import { db } from  "../data/firebase.config";



const DisplayInfos = () => {
  const [data  , setData] = useState([]);

  const getData = async () => {
       
    await getDocs(collection(db, "users"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setData(newData); 

        })
   



    };


   useEffect(()=>{
    getData();

   })


  return (
     <div className="info-box">

      <h3> my Profile   </h3>
      { data.map((user)=>{
        return (
          <>
          <ul key={Math.random()*10}>

          <li> name : {user.name}</li>
          <li> Job  :   {user.job}</li>
          <p> {user.desc}</p>

          </ul>
          
          </>
          


        )
      })}
    
     
    </div>
  )
}



export default DisplayInfos
