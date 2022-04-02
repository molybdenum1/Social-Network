import React from 'react'
import './NavItem.css';

export default function NavItem(props) {
  return (
    <div>
      <a href={"/" + props.path} className="item">{props.name}</a>
    </div>
  )
}
