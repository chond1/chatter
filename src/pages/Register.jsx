import React from 'react'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chatter</span>
            <span className="title">Register</span>
            <form>
                <input type='text' placeholder="display name"/>
                <input type='email' placeholder="email"/>
                <input type='password' placeholder="password"/>
                <input style={{display:'none'}} type='file' id='file'/>
                <label htmlFor='file'>
                    <AddPhotoAlternateOutlinedIcon/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Have an account already? Login</p>
        </div>
    </div>
  )
}

export default Register