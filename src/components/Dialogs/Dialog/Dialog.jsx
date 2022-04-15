<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Dialog(props) {
  return (
    <div className="dialog">
        <NavLink 
        className="user-dialog" 
        to={"/dialogs/"+ props.id}>
            {props.name}
        </NavLink>
    </div>
  )
}
=======
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Dialog(props) {
  return (
    <div className="dialog">
        <NavLink 
        className="user-dialog" 
        to={"/dialogs/"+ props.id}>
            {props.name}
        </NavLink>
    </div>
  )
}
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
