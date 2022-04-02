import React from 'react'
import './Navbar.css';
import NavItem from './Navbar-Item/NavItem';

export default function Navbar() {
  return (
    <div className='nav'>
      <NavItem name="Profile" path='profile'/>
      <NavItem name="Dialogi te-a-tet" path='dialogs'/>
      <NavItem name="Groups"/>
      <NavItem name="Gallery"/>
      <NavItem name="Settings"/>
      
    </div>
  )
}
