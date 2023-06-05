// CSS
import './styles/index.css'
import './styles/student.css';
import './styles/font.css';
import './styles/flex.css'
import './styles/userprofile.css';


import * as React from 'react';


// icons
import {AiOutlineSetting, AiOutlineBell} from 'react-icons/ai';



// Userprofile
import UserProfilePhoto from '../assets/images/userprofile.png';






const UserProfile = () => {
  const userInfo = {
    firstName: 'yahiya',
    lastName: 'ali',
    role: 'admin',
  };

  return (
    <div id='user-profile-div' className='flex-r-sb' >
      <div className="notification flex-c">
        <AiOutlineBell className='profile-icons'/>
        <span className="notification-count"></span>
      </div>
	  <div className='profile-setting flex-c'>
	  <AiOutlineSetting className='profile-icons'/>
	  </div>
      <div className="username">
        <span className="poppins">
          {userInfo.firstName}
          {userInfo.lastName}
        </span>
        <span className="poppins-w400">{userInfo.role}</span>
      </div>
      <div id="userprofile">
        <img src={UserProfilePhoto} alt="UserProfilePhoto" />
      </div>
    </div>
  );
};








const Student = () => {

	return (
		<section id="student">
		<div className="student-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			student <span className="poppins "></span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default Student;