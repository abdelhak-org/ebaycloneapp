import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className ="card" >
              
    <img  src= {props.image}  alt ="imag" />
    <h3> {props.category}</h3>
    <p> {props.description.substring(0 ,60)}</p>
    <p>{props.price}</p>
  
   </div>
  )
}

export default Card
