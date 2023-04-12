import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className='navbar'>
        <span className='logo'>Chats</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <span>Tyfanny</span>
            <button onClick={handleClick}>logout</button>
        </div>
    </div>
  )
}

export default Navbar