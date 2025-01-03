import React from 'react';
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <button onClick={()=>{navigate('/contact',{replace:true})}}>Get Started</button>
    </nav>
  );
};

export default Navbar;
