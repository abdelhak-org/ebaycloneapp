import React ,{ useState , useEffect} from 'react';
import "./searchbox.css"

const SearchBox = ({products}) => {
  const [displayCategories , setDisplayCategories] = useState(false);
  const [searchValue , setSearchValue ] = useState("");
  const [filtredValue , setFiltredValue] = useState([]);


  useEffect(()=>{
    products.filter((item)=>{
     return item.title.includes(searchValue)? setFiltredValue(item) :"null" ;
    })
  })
  return (
    <div className='search-box'>
      <input placeholder='Search..'  onChange={(e)=> setSearchValue(e.target.value) }/>
      <div style={{
        width:"180px" ,
        minHeight:"60px" ,
        backgroundColor :"red",
        position:"absolute",
        top:"45px" ,
        left : "0px",
        color:"white"
    
    
    
    }}>
     
    {
       filtredValue.map((item)=> <p>{item.title}</p> )
    }
    </div>
      <div className='categories' >
        <h4 onClick={()=> setDisplayCategories(!displayCategories)} >Alle kategorien </h4>
        {
          displayCategories &&  
          <ul className='links-box '>
          <li>Autos</li>
          <li>Immobilien</li>
          <li>Jobs</li>
          <li>Mode && Beauty</li>
        </ul>
        
        


        }
      </div>
    </div>
  )
}

export default SearchBox
