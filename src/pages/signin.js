// CSS file
import '../styles/signin.css';
import '../styles/signup.css';
import '../styles/index.css';
import '../styles/flex.css';

import React from 'react';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import using React Icons
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi';

// Import Image
import SignInImg from '../assets/images/signin.png';
import SignUpImg from '../assets/images/signup.png';

// Imported the userLogin.json data somehow
import userLoginData from '../json/userLogin.json';

// Importing the dasboard
import AswsIndex from './index';

// Importing the Components
import Loading from '../components/loading';

const SignIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an artificial delay of 2 seconds (2000 milliseconds)
    const delay = 1000;

    setTimeout(() => {
      // Check if the user is logged in (e.g., retrieve data from sessionStorage)
      const isLoggedInSessionStorage = sessionStorage.getItem('isLoggedIn');
      if (isLoggedInSessionStorage !== null) {
        setIsLoggedIn(isLoggedInSessionStorage === 'true');
        setIsLoading(false); // Mark loading as completed
      } else {

        // Check if the user is logged in (e.g., retrieve data from localStorage)
        const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(isLoggedInLocalStorage === 'true');
        setIsLoading(false); // Mark loading as completed

        // If not found in sessionStorage, store the value in sessionStorage for future reference in this session
        sessionStorage.setItem('isLoggedIn', isLoggedInLocalStorage);
      }
    }, delay);
  }, []);

  if (isLoading) {
    // Show a loading page or spinner while the status is being checked
    return <Loading />;
  }

  return (
    <>
      {isLoggedIn ? (
        <AswsIndex />
      ) : (
        <section>
          <Router>
            <Routes>
              <Route exact path="/" element={<SigninPageComponent />} />
              <Route exact path="/signup" element={<SignupPageComponent />} />
              <Route exact path="/forgot" element={<ForgotPageComponenet />} />
            </Routes>
          </Router>
        </section>
      )}
    </>
  );
};

const ForgotPageComponenet = () => {
  return <>Forgot</>;
};

const SignupPageComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main className="signup-main-container ">
      <section>
        <div className="signup-img-container">
          <img className="signup-img" src={SignUpImg} alt="SignInPage" />
        </div>

        <div className="signup-container flex-col gap2rem">
          <div className="signup-heading">
            <span>sign-up</span>
          </div>
          <div className="signup-card-container">
            <div className="signup-logo">
              <span>asws</span>
            </div>

            <div className="signup-form-container">
              <form action="">
                <div className="signup-form-infromation">
                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-first-name-input"
                    >
                      first name
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-first-name-input"
                      placeholder="Mohammed"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-last-name-input"
                    >
                      last name
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-last-name-input"
                      placeholder="Sohail"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-phone-number-input"
                    >
                      phone number
                    </label>
                    <input
                      type="number"
                      className="signup-form-input poppin"
                      id="signup-phone-number-input"
                      placeholder="+91 986325147"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-email-input"
                    >
                      email
                    </label>
                    <input
                      type="text"
                      className="signup-form-input poppin"
                      id="signup-email-input"
                      placeholder="hannah.green@test.com"
                      required
                    />
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-password-input"
                    >
                      password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="signup-form-input poppin"
                        id="signup-password-input"
                        placeholder="password123@"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {password && (
                        <span
                          className="signup-eye-icon"
                          onClick={handleTogglePasswordVisibility}
                        >
                          {passwordVisible ? (
                            <PiEyeBold />
                          ) : (
                            <PiEyeClosedBold />
                          )}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-feild-container">
                    <label
                      className="signup-form-label"
                      htmlFor="signup-confirm-password-input"
                    >
                      confirm password
                    </label>
                    <div className="password-input-wrapper">
                      <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        className="signup-form-input poppin"
                        id="signup-confirm-password-input"
                        placeholder="password123@"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPassword && (
                        <span
                          className="signup-eye-icon"
                          onClick={handleToggleConfirmPasswordVisibility}
                        >
                          {confirmPasswordVisible ? (
                            <PiEyeBold />
                          ) : (
                            <PiEyeClosedBold />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-checkbox-container">
                  <span>
                    <label className="signup-checkbox-lable flex-c">
                      <input type="checkbox" />
                      <span className="signup-checkbox-label">
                        i agree all terms and condition
                      </span>
                    </label>
                  </span>
                </div>
                <div className="create-account-wrapper">
                  {' '}
                  <button
                    className="create-account-button-container"
                    type="submit"
                  >
                    create account
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
              <div className="login-container">
                <span> already have an account ?</span>{' '}
                <Link to="/">
                  <span className="login">log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const SigninPageComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Find the user in the userLoginData array by matching the email
    const user = userLoginData.find((user) => user.email === email);

    if (user) {
      // Check if the password matches the stored password for the user
      if (user.password === password) {
        // Login successful, store login info in localStorage if "remember me" is checked
        if (rememberMe) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userId', user.id);
        }
        // Handle successful login here, e.g., redirect to dashboard
        window.location.reload();
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userId', user.id);

        setLoginError('');
      } else {
        // Password is incorrect
        setLoginError('Incorrect password');
      }
    } else {
      // User not found in userLoginData
      setLoginError('User not found');
    }
  };

  return (
    <main className="signin-main-container ">
      <section>
        <div className="signin-img-container">
          <img className="signin-img" src={SignInImg} alt="SignInPage" />
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
              <form action="" onSubmit={handleFormSubmit}>
                <div className="form-feild-container">
                  <label
                    className="signin-form-label"
                    htmlFor="signin-email-input"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="signin-form-input poppin"
                    id="signin-email-input"
                    placeholder="hannah.green@test.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>

                <div className="form-feild-container">
                  <label
                    className="signin-form-label"
                    htmlFor="signin-password-input"
                  >
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="signin-form-input poppin"
                      id="signin-password-input"
                      placeholder="password123@"
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
                  {loginError && (
                    <div className="error-message">{loginError}</div>
                  )}
                </div>

                <div className="form-checkbox-container">
                  <span>
                    <label className="signin-checkbox-lable flex-c">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                      <span className="signin-checkbox-label">
                        remember me on this computer
                      </span>
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
