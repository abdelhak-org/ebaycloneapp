
import React from "react"
import "./Header.css";
import OrtBox from "./OrtBox";
import ProfileBox from "./ProfileBox";
import SearchBox from "./SearchBox";

const Header =({products , setSearchvalue})=>{

  
  
  return (
  
    <div className='header'>
      <div className='header__wrapper'>
        
      <SearchBox products ={products} setSearchvalue={ setSearchvalue}/>
      <OrtBox/>
      <ProfileBox width="360px"/>
      </div>
    </div>
  
  )
}

export default Header
