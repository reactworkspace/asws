// CSS
import '../styles/index.css'
import '../styles/zonedetails.css';
import '../styles/font.css';
import '../styles/flex.css'


import * as React from 'react';




// Import user profile components
import UserProfile from '../components/userprofile';

// import zone data
import ZoneData from '../data/zonedata';



const ZoneDetails = () => {



	return (
		<section id="zonedetails">
		<div className="zonedetails-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			zone <span className="poppins ">{'>'} {ZoneData.centreName}</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
		
	);

}

export default ZoneDetails;