import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { userContext } from '../../App';
import './Login.css';
import { useHistory, useLocation } from 'react-router';


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleLogin = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const {displayName, email} = result.user;
    const loggedInUser = {
        userName: displayName,
        email: email,
      }
      setLoggedInUser(loggedInUser);
      history.replace(from);

    //console.log(displayName, email)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
    }
    return (
        <div className="login-box">
            <h1 className="login">Login</h1>
            <button onClick={handleGoogleLogin} className="google-btn">Continue with Google</button>
            <h5>{loggedInUser.name}</h5>
            <h5>{loggedInUser.email}</h5>
        </div>
    );
};

export default Login;