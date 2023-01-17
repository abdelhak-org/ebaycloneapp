import React from 'react';
import "./SearchInput.css";
import {useState } from "react"

function Searchinput() {
  const [searchvalue, setSearchvalue]=useState("")
  return (
    <input className='searchinput' 
    value={searchvalue}
    placeholder="search ..."
    
     onChange={(e)=> setSearchvalue(e.target.value)} />
      
   
  )
}

export default Searchinput
