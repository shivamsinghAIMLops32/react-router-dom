import React, { useState } from 'react'

const ContactForm = () => {
    const [email,setEmail]= useState('');
  return (
    <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={email} onChange={()=>{e.target.value}} placeholder='xyz@txt.com' />
        <button>submit &rarr;</button>
    </div>
  )
}

export default ContactForm