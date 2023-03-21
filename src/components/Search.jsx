import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://pbs.twimg.com/media/CvS_r8KWEAEYSzo.jpg' alt='profile'/>
        <div className="userChatInfo">
          <span>Tyler</span>
        </div>
      </div>
    </div>
  )
}

export default Search