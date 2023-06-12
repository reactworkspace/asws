



//  import profile
import TeacherProfile from '../assets/images/teacherprofile.png';

// react icons
import { BsTelephone, BsEnvelope } from 'react-icons/bs';


// Importing teacher data from data folder
import teacherData from '../data/teacherdata';




const TeacherCard = () => {
  
	return (
	  <div id="teacher-card">
		<div className="teacher-card-profile">
		  <img
			src={TeacherProfile}
			alt="teacherprofile"
			className="teacher-profile-img"
		  />
		</div>
		<div className="teacher-card-name poppins">
		  <a href="/teacherdetails">
			<span>{teacherData.teacherName}</span>
		  </a>
		</div>
		<div className="teacher-card-zone">
		  <span>{teacherData.centreName}</span>
		</div>
		<div className="teacher-card-contact">
		  <div className="teacher-circle">
			<BsTelephone className="mobile-phone-icon" />
		  </div>
		  <div className="teacher-circle">
			<BsEnvelope className="email-icon" />
		  </div>
		</div>
	  </div>
	);
  };

export default TeacherCard;