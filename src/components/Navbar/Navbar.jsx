import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <div><a className="item">Profile</a></div>
        <div><a className="item">Dialogi te-a-tet</a></div>
        <div><a  className="item">Lenta</a></div>
        <div><a className="item">Docs</a></div>
        <div><a className="item">Music</a></div>
        <div><a className="item">Settings</a></div>
      </nav>
    </div>
  )
}
