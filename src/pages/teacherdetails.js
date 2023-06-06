// CSS
import '../styles/index.css'
import '../styles/teacherdetails.css';
import '../styles/font.css';
import '../styles/flex.css'



import * as React from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';









const Teacherdetails = () => {

	return (
		<section id="teacherdetails">
		<div className="teacherdetails-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			teacher <span className="poppins ">{'>'} teacher details</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default Teacherdetails;