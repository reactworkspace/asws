// CSS
import '../styles/index.css'
import '../styles/student.css';
import '../styles/font.css';
import '../styles/flex.css'



import * as React from 'react';


// Import user profile components
import UserProfile from '../components/userprofile';










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