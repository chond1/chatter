import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
          <img src='https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <div className='userChatInfo'>
              <span>
                Andre
              </span>
              <p>Hello</p>
          </div>
        </div>
      <div className='userChat'>
          <img src='https://images.pexels.com/photos/6981884/pexels-photo-6981884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <div className='userChatInfo'>
              <span>
                Royal
              </span>
              <p>Hello</p>
          </div>
        </div>
      <div className='userChat'>
          <img src='https://images.pexels.com/photos/5905895/pexels-photo-5905895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <div className='userChatInfo'>
              <span>
                Katerina
              </span>
              <p>Hello</p>
          </div>
        </div>
    </div>
  )
}

export default Chats