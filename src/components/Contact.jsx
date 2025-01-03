import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ContactForm from './ContactForm';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <button onClick={()=>navigate('/contact/info')}>Contact Info</button>
      
      <ContactForm/>
     
    </div>
  )
}

export default Contact