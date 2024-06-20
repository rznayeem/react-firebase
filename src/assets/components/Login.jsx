import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.init';

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        const user = res.user;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={googleLogIn}>Log in</button>
    </div>
  );
};

export default Login;
