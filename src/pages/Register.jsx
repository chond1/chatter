import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { auth, db, storage } from '../firebase';
import { doc, setDoc, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';

const Register = () => {
  const [err,setErr] = useState(false);
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    console.log(displayName)

  
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      const storageRef = ref(storage, `${displayName}`);
      await uploadBytesResumable(storageRef).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              // photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              // photoURL: downloadURL,
            });
          } catch(err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    }catch(err){
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chatter</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="display name" />
            
                <input type='email' placeholder="email"/>
                <input type='password' placeholder="password"/>
                <input style={{display:'none'}} type='file' id='file'/>
                {/* <label htmlFor='file'>
                    <AddPhotoAlternateOutlinedIcon/>
                    <span>Add an avatar</span>
                </label> */}
                <button disabled='loading'>Sign up</button>
                {loading && 'Uploading and compressing the image please wait...'}
                {err && <span>Something went wrong.</span>}
            </form>
            <p>Have an account already? <Link to="/login">Login</Link></p>
        </div>
    </div>
  );
};

export default Register;