import React from 'react';
import Messages from './Messages';
import Input from './Input';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Tylers</span>
        <div className='chatIcons'>
          <MoreVertIcon/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat