import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Chats</span>
        <div className='user'>
            <img src='https://pbs.twimg.com/media/CvS_r8KWEAEYSzo.jpg' alt='' />
            <span>Tyler</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar