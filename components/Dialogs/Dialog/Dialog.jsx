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
