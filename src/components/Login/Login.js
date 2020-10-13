import React, { useContext } from 'react';
import'../Login/Login.css';
import logo from '../../images/logos/logo.png'
import google from '../../images/icons/icons8-google-100.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fairebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
  const[logedInUser , setLogedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  
  const  handelgoogleSingin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const {displayName , email} = result.user;
      const sinedInUser = {name : displayName , email}
      setLogedInUser(sinedInUser);
      history.replace(from);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
    return (
 
            <div className=" google-login ">
                <div className="conatiner ">
                  <div className="row ">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4 log-in-area">
                    <img className="log-google2" style={{width:'200px' , paddingBottom:'25px' }} src={logo} alt=""/>
                    <h2 className="log-google"><b>Login With Google</b></h2>
                <br/>
    <button onClick={handelgoogleSingin} variant="outline-info"><img src={google} alt=""/> Google Sing In</button>
                    </div>
                    <div className="col-md-4">

                    </div>
                  </div>
                </div>
            </div>
        
    );
};

export default Login;