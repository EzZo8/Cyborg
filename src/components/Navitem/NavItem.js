import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className='nav-item ms-4'>
      <Link to={props.href} className=" custom-link">
        {props.children}
      </Link>
    </li>
  )
}
const NavItemDropdown = (props) => {
    return (
      <li className='nav-item dropdown '>
        {props.children}
      </li>
    )
  }

export default NavItem
export {NavItemDropdown}

