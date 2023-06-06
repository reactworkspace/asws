// CSS
import '../styles/index.css'
import '../styles/teacher.css';
import '../styles/font.css';
import '../styles/flex.css'



// Import user profile components
import UserProfile from '../components/userprofile';



import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';



const SearchTeacher = () => {
  return (
    <div className="search-teacher-div">
      <input type="text" id="search-teacher" placeholder="Search Teacher here.." />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

const NewCentreButton = () => {
  return (
    <button className="new-btn Montserrat flex-c">
          <TiPlus />
          <span>New</span>
        </button>
  );
}





const Teacher = () => {
	return (
		<section id="teacher">
		<div>
      <div className="teacher-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			teacher <span className="poppins "></span>
			</span>
		  </div>
		  <UserProfile />
		</div>
    <div className='teacher-search-btn flex-r-sb'>
      <SearchTeacher />
      <NewCentreButton />
    </div>


    
    </div>


	  </section>
	)
}

export default Teacher;