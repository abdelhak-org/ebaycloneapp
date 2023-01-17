import React from 'react';
import "./Link.css" ;

const LinkComp = (props) => {
  return (
    <li className='link'>
        {props.children}
    </li>
  )
}

export default LinkComp
