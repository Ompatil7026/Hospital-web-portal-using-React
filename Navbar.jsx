
import React from 'react';
import { FaSearch } from "react-icons/fa";
import Logo from '../Assets/Navbar/logo.png';
import './Navbar.css';
    const Navbar = () => {
    return (
        
        
        <div className='navbar-container'>
            <div className='navbar-left'>
                <img style={{height:"40px", width:"50px", borderRadius:"50%",backgroundColor:"blueviolet"}} alt='headerImage' src={Logo} /> 
                <h1> One-Care Hospital</h1>
            </div>
            <div className='nav-search'>
                <select className='search-select'>
                    <option>All</option>
                </select>
                <input placeholder='Search on One-care.in' className="search-input"></input>
                
                <div className="search-icon"><FaSearch /></div>
                
            </div>
            

            <div className='navbar-right'>
                <h1>Login</h1>
                <h1>Register</h1>
            </div>

            
        </div>
    )
}

export default Navbar ;