// CSS
import '../styles/index.css'
import '../styles/addzone.css';
import '../styles/font.css';
import '../styles/flex.css'
import '../styles/userprofile.css';


import * as React from 'react';


// Import user profile components
import UserProfile from '../components/userprofile';





const AddZone = () => {

	return (
		<section id="addzone">
		<div className="addzone-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			centre <span className="poppins ">{'>'} create centre</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default AddZone;