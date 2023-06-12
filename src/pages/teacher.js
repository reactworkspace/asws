// CSS
import '../styles/index.css';
import '../styles/teacher.css';
import '../styles/font.css';
import '../styles/flex.css';

import * as React from 'react';
import { useState } from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';


// react icons
import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsCaretUpFill } from 'react-icons/bs';

// Import Teacher Card
import TeacherCard from '../components/teacherscard';

const SearchTeacher = () => {
  return (
    <div className="search-teacher-div">
      <input
        type="text"
        id="search-teacher"
        placeholder="Search Teacher here.."
      />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

const NewCentreButton = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="new-teacher-btn-div">
      <button
        className="new-teacher-btn Montserrat flex-c"
        onClick={toggleContent}
      >
        <TiPlus />
        <span>new teacher</span>
      </button>
      {showContent && (
        <div className="new-teacher-btn-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <a href="/addteacher">add teacher</a>
            <a href="/importteacher">import teacher</a>
          </div>
        </div>
      )}
    </div>
  );
};



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
        <div className="teacher-search-btn flex-r-sb">
          <SearchTeacher />
          <NewCentreButton />
        </div>
        <div id="teacher-cards-list">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
    </section>
  );
};

export default Teacher;
