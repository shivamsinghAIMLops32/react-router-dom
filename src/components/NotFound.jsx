import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div style={{color:"red"}}>404 | page not found
        <button onClick={()=>navigate('/')}>GO back to home</button>
    </div>
  )
}

export default NotFound