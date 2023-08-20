import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginNavBar from "../components/LoginNav-Bar.jsx";

const SignIn = () => {

	const [ signedIn, setSignedIn ] = useState(false);

	// useEffect for checking if logged in, dependent on signedIn state



  let navigate = useNavigate();
  const toSignUp = () => {
    let path = "/signup";
    navigate(path);
  };
	const toHome = () => {
    let path = "/home";
    navigate(path);
  };

  const Submit = (username, password) => {
    // signup functionality (POST)
    fetch(`http://localhost:3000/leaf/user/login?username=${username}&password=${password}`)
    // redirect to home after signed up (useNavigate)

  };

  return (
    <div className="signInPage">
      <LoginNavBar />
      <div className="signInContainer">

        <h2>Sign In:</h2>

        <div className="signInBox">
          <form onSubmit={Submit}>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="text" placeholder="password" />
						<input type="submit" value='Sign In'/>
          </form>
					<p>Don't have an account?</p>
					<button onClick={toSignUp}>Sign Up</button>
          <div>.</div>
					<button onClick={toHome}>Temporary : Go straight to home</button>
        </div>
				
      </div>
    </div>
  );
};

export default SignIn;
