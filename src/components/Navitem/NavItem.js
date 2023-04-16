import './NavItem.css'
import React from 'react'


const NavItem = (props) => {
  return (
    <li className='nav-item ms-4'>
      <a href={props.href} className=" custom-link">
        {props.children}
      </a>
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

