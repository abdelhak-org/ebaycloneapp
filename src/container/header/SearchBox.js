import React ,{ useState , useEffect} from 'react';
import "./searchbox.css"

const SearchBox = ({products , setSearchvalue}) => {
  const [displayCategories , setDisplayCategories] = useState(false);


  useEffect(()=>{
   
  })
  return (
    <div className='search-box'>
      <input placeholder='Search..'   onChange={(e)=> setSearchvalue(e.target.value)}/>
      <div style={{
        width:"180px" ,
        minHeight:"60px" ,
        backgroundColor :"",
        position:"absolute",
        top:"45px" ,
        left : "0px",
        color:"white"
    
    
    
    }}>
     
  
    </div>
      <div className='categories' >
        <h4 onClick={()=> setDisplayCategories(!displayCategories)} >Alle kategorien </h4>
        { 
          displayCategories &&  
          <ul className='links-box '>
          <li  onClick={(e)=> setSearchvalue(e.target.value)}>Autos</li>
          <li  onClick={(e)=> setSearchvalue(e.target.value)}>Immobilien</li>
          <li  onClick={(e)=> setSearchvalue(e.target.value)}>Jobs</li>
          <li  onClick={(e)=> setSearchvalue(e.target.value)}>Mode && Beauty</li>
        </ul>
        
        


        }
      </div>
    </div>
  )
}

export default SearchBox
