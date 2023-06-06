// CSS
import '../styles/index.css'
import '../styles/addstudent.css';
import '../styles/font.css';
import '../styles/flex.css'
import '../styles/userprofile.css';


import * as React from 'react';


// Import user profile components
import UserProfile from '../components/userprofile';









const AddStudent = () => {

	return (
		<section id="addstudent">
		<div className="addstudent-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			student <span className="poppins ">{'>'} add student</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default AddStudent;