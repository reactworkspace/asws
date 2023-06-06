// CSS
import '../styles/index.css'
import '../styles/addteacher.css';
import '../styles/font.css';
import '../styles/flex.css'



import * as React from 'react';


// Import user profile components
import UserProfile from '../components/userprofile';







const AddTeacher = () => {

	return (
		<section id="addteacher">
		<div className="addteacher-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			Teacher <span className="poppins ">{'>'} add student</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default AddTeacher;