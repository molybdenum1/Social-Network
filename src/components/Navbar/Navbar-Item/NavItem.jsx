import React from 'react'
import './NavItem.css';
import {NavLink} from 'react-router-dom';

export default function NavItem(props) {
  return (
    <div className="div-nav-it">
      <NavLink to={"/" + props.path} className="nav-item">{props.name}</NavLink>
    </div>
  )
}
