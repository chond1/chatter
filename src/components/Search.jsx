import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/5999894/pexels-photo-5999894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile'/>
        <div className="userChatInfo">
          <span>Ono</span>
        </div>
      </div>
    </div>
  )
}

export default Search