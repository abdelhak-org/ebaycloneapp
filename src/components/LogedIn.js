import React from 'react';
import "./logedin.css"

const LogedIn = (props) => {
  return (
    <div className='logedin'>
      <h3> wellcome you are LogedIn as :</h3>
      <p> {props.logedin.email} </p>
      <button onClick={()=> props.logout()}>LogOut</button>
    </div>
  )
}

export default LogedIn
