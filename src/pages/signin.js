// CSS file
import '../styles/signin.css';
import '../styles/index.css';
import '../styles/flex.css';

import React from 'react';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import using React Icons
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi';

// Import Image
import signIn from '../assets/images/signin.png';

const SignIn = () => {
  return (
    <>
      <section>
        <Router>
          <Routes>
            <Route exact path="/" element={<SigninPageComponent />}></Route>
            <Route
              exact
              path="/signup"
              element={<SignupPageComponent />}
            ></Route>

            <Route
              exact
              path="/forgot"
              element={<ForgotPageComponenet />}
            ></Route>
          </Routes>
        </Router>
      </section>
    </>
  );
};

const ForgotPageComponenet = () => {
  return <>Forgot</>;
};

const SignupPageComponent = () => {
  return <>Siginup</>;
};

const SigninPageComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="signin-main-container ">
      <section>
        <div className="signin-img-container">
          <img className="signin-img" src={signIn} alt="SignInPage" />
        </div>

        <div className="signin-container flex-col gap2rem">
          <div className="signin-heading">
            <span>sign-in</span>
          </div>
          <div className="signin-card-container">
            <div className="signin-logo">
              <span>asws</span>
            </div>
            <div className="signin-greeting">
              <span>
                welcome to <span>asws</span>
              </span>
            </div>
            <div className="signin-form-container">
              <form action="">
                <div className="form-feild-container">
                  <label
                    className="sigin-form-label"
                    htmlFor="sigin-email-input"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="sigin-form-input poppin"
                    id="sigin-email-input"
                    placeholder="hannah.green@test.com"
                    required
                  />
                </div>

                <div className="form-feild-container">
                  <label
                    className="sigin-form-label"
                    htmlFor="sigin-password-input"
                  >
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="sigin-form-input poppin"
                      id="sigin-password-input"
                      placeholder="Password123@"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {password && (
                      <span
                        className="eye-icon"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {passwordVisible ? <PiEyeBold /> : <PiEyeClosedBold />}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-checkbox-container">
                  <span>
                    <label className="signin-checkbox-lable flex-c poppins-sub-heading-1rem">
                      <input type="checkbox" />
                      <span>remember me on this computer</span>
                    </label>
                  </span>
                  
                </div>
                <div className="form-feild-container">
                  {' '}
                  <button className="login-button-container" type="submit">
                    log in
                  </button>
                </div>
              </form>
            </div>
            <div className="forgot-create-new-wrapper gap2rem">
              <div className="forgot-password-container">
                <Link to="/forgot">
                  <span>forgot password?</span>
                </Link>
              </div>
              <div className="create-new-container">
                <span> don't have an account yet ?</span>{' '}
                <Link to="/signup">
                  <span className="create-new">create new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
