import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png';
import NavItem  from '../../components/Navitem/NavItem';


const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar text-white  p-3">
        <div className="container ">
            <img src={logo} alt="" className="navbar-brand navbar-brand-img" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
            <form className="ms-5 ">
                <input className="form-control me-2 rounded-pill " type="search" placeholder="     Type Something" aria-label="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </form>
                <ul className="navbar-nav ms-auto  ">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/browse">Browse</NavItem>
                <NavItem href="/details">Details</NavItem>
                <NavItem href="/">Streams</NavItem>
                <NavItem href="/">Profile</NavItem>
                </ul>
                   
                    
                    
                
            </div>
        </div>
    </div>
  )
}

 


export default Header
