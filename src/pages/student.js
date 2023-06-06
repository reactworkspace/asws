// CSS
import '../styles/index.css'
import '../styles/student.css';
import '../styles/font.css';
import '../styles/flex.css'



import * as React from 'react';


// Import user profile components
import UserProfile from '../components/userprofile';


// react icons
import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';






const SearchStudent= () => {
	return (
	  <div className="search-student-div">
		<input type="text" id="search-student" placeholder="Search Student here.." />
		<HiOutlineSearch className="search-student-icon" />
	  </div>
	);
  };
  
  const NewStudentButton = () => {
	return (
	  <button className="new-btn Montserrat flex-c">
			<TiPlus />
			<span>New</span>
		  </button>
	);
  }
  









const Student = () => {

	return (
		<section id="student">
		<div>
		<div className="student-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			student <span className="poppins "></span>
			</span>
		  </div>
		  <UserProfile />
		</div>

		<div className='student-search-btn flex-r-sb'>
			<SearchStudent />
			<NewStudentButton />

		</div>


		</div>









	  </section>
		
	);

}

export default Student;