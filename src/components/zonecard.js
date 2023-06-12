// svg icons
import { ReactComponent as ProfileIcon } from '../assets/svg/profileicon.svg';
import { ReactComponent as ClassesIcon } from '../assets/svg/classesicon.svg';
import { ReactComponent as TeachersIcon } from '../assets/svg/teachericon.svg';
import { ReactComponent as StudentIcon } from '../assets/svg/studenticon.svg';
import { ReactComponent as ClockIcon } from '../assets/svg/clockicon.svg';




// centre photo
import CentrePhoto from '../assets/images/hello.png';

// import data from js 
import zoneData from '../data/zonedata';

const ZoneCard = () => {

  
	return (
	  <div id="zone-card">
		<div className="zone-card-top">
		  <div className="zone-card-image">
			<img src={CentrePhoto} alt="centrePhoto" className="zone-card-img" />
		  </div>
		  <div>
			<div className="zone-name-heading">
			  <span>{zoneData.centreName}</span>
			</div>
			<div className="head-teacher-name">
			  <ProfileIcon className="zone-profile-icon" />
			  <span>{zoneData.teacherName}</span>
			  <span>({zoneData.role})</span>
			</div>
		  </div>
		</div>
		<hr className="zone-card-hr-line" />
		<div className="zone-card-bottom">
  
		  <div className="zone-card-bottom-div">
			<div>
			  <ClassesIcon className='zone-icons' />
			  <span>{zoneData.classes}</span>
			  <span>classes</span>
			</div>
			<div>
			  <StudentIcon className='zone-icons' />
			  <span>{zoneData.students}</span>
			  <span>students</span>
			</div>
  
		  </div>
		  <div className="zone-card-bottom-div">
  
		  <div>
			  <TeachersIcon className='zone-icons'/>
			  <span>{zoneData.teachers}</span>
			  <span>teachers</span>
			</div>
			
			<div>
			  <ClockIcon className='zone-icons'/>
			  <span>{zoneData.studyHours}</span>
			  <span>hour/day</span>
			</div>
			
		  </div>
		</div>
		<div className='view-centre'>
		  <a href="/zonedetails"><span>view centre</span></a>
		</div>
	  </div>
	);
  };
  

  export default ZoneCard;