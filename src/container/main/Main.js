import React  from 'react' ;
import "../../components/card.css"
import "./Main.css";
import Card from "../../components/Card"

const Main = ({products , searchvalue}) => {
 
  return (
    <div className='main__container'>
   

   
    {
    
        products?.map((product)=> {
          return (
            <Card image={product.image} key ={product.id} category ={product.category}
             price={product.price} description={product.description}/>
         
          )
        })
     }
        

    </div>

  )
}

export default Main
