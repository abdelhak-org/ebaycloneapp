import React from 'react';
import "./BaseButton.css"

const BaseButton = (props) => {
  return (
   <button className='basebutton' >
    {props.text}
   </button>
  )
}

export default BaseButton
