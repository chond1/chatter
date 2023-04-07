import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Start chatting!' />
      <div className='send'>
        <AttachFileIcon className='fileIcon'/>
        <input type='file' style={{display:'none'}} id='file' />
        <label htmlFor='file'>
          <AddPhotoAlternateOutlinedIcon className='imgIcon'/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input