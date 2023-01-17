import React from 'react';
import "./ortbox.css";
import { } from "react-icons"

const OrtBox = () => {
  return (
    <div className='ortbox'>
      <input placeholder='Ort oder Postleitzahl' className='input-ort'/>
      <input placeholder='Ganzer Ort ' className='ganzerort'/>
      <button> Finden </button>
    </div>
  )
}

export default OrtBox
