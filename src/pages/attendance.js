// CSS
import '../styles/index.css'
import '../styles/attendance.css';
import '../styles/font.css';
import '../styles/flex.css'



// Import user profile components
import UserProfile from '../components/userprofile';






const Attendance = () => {
	return (
		<section id="attendance">
		<div className="teacher-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			attendance 
			</span>
		  </div>
		  <UserProfile />
		</div>
	  </section>
	)
}

export default Attendance;
