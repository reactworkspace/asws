// CSS
import '../styles/index.css'
import '../styles/teacherdetails.css';
import '../styles/font.css';
import '../styles/flex.css'

import { Link } from 'react-router-dom';
import * as React from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';









const TeacherDetails = () => {

	return (
		<section id="teacherdetails">
		<div className="teacherdetails-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			<Link to="/teacher">teacher</Link>
              {' > '} <span className="poppins "> teacher details</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
	);
}

export default TeacherDetails;