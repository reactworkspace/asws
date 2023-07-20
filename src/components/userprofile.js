// icons
import { AiOutlineSetting, AiOutlineBell } from 'react-icons/ai';

import UserProfilePhoto from '../assets/images/userprofile.png';

import '../styles/userprofile.css';
import '../styles/flex.css';

// Imported the userLogin.json data somehow
import userLoginData from '../json/userLogin.json';

const UserProfile = () => {
  // Object that store the json fetch data of user
  let userInfo = {};

  const userIdLocalStorage = localStorage.getItem('userId');
  const userIdSessionStorage = sessionStorage.getItem('userId');

  // To check if the user is logged in
  const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn') === 'true';
  const isLoggedInSessionStorage =
    sessionStorage.getItem('isLoggedIn') === 'true';

  // // Example of how to use the values
  // if (isLoggedInLocalStorage) {
  //   console.log('User is logged in. Id:', userIdLocalStorage);
  // }

  // if (isLoggedInSessionStorage) {
  //   console.log('User is logged in. Id:', userIdSessionStorage);
  // }

  const users = userLoginData;

  // Find the user object with matching ID in Local Storage
  const loggedInUserLocalStorage = users.find(
    (user) => user.id === parseInt(userIdLocalStorage, 10)
  );

  // Find the user object with matching ID in Session Storage
  const loggedInUserSessionStorage = users.find(
    (user) => user.id === parseInt(userIdSessionStorage, 10)
  );

  // Example of how to use the values
  if (isLoggedInLocalStorage && loggedInUserLocalStorage) {
    // console.log('User is logged in. Id:', userIdLocalStorage);
    // console.log('User Data:', loggedInUserLocalStorage);
    userInfo = loggedInUserLocalStorage;
  }

  if (isLoggedInSessionStorage && loggedInUserSessionStorage) {
    // console.log('User is logged in. Id:', userIdSessionStorage);
    // console.log('User Data:', loggedInUserSessionStorage);
    userInfo = loggedInUserSessionStorage;
  }

  return (
    <div id="user-profile-div" className="flex-r-sb">
      <div className="notification flex-c">
        <AiOutlineBell className="profile-icons" />
        <span className="notification-count"></span>
      </div>
      <div className="profile-setting flex-c">
        <AiOutlineSetting className="profile-icons" />
      </div>
      <div className="username">
        <span className="poppins">
          {userInfo.firstname}
          {/* {userInfo.lastname} */}
        </span>
        <span className="poppins-w400">{userInfo.role}</span>
      </div>
      <div id="userprofile">
        <img src={UserProfilePhoto} alt="UserProfilePhoto" />
      </div>
    </div>
  );
};

export default UserProfile;
