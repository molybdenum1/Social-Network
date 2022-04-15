<<<<<<< HEAD
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
=======
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
>>>>>>> 8d9d80c8514a1d7f30752702e159e6fe9f7085aa
