import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Chats</span>
        <div className='user'>
            <img src='https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <span>Tyfanny</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar