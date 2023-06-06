// CSS
import '../styles/index.css'
import '../styles/studentdetails.css';
import '../styles/font.css';
import '../styles/flex.css'


import * as React from 'react';




// Import user profile components
import UserProfile from '../components/userprofile';









const Studentdetails = () => {

	return (
		<section id="studentdetails">
		<div className="studentdetails-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			student <span className="poppins ">{'>'} student details</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default Studentdetails;