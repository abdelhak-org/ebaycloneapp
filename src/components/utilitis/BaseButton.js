import React from 'react';
import "./BaseButton.css"

const BaseButton = (props) => {
  return (
   <button className='basebutton' >
    {props.children}
   </button>
  )
}

export default BaseButton
