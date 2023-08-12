// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/teacher.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

import * as React from 'react';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

// Import Button Componenets
import { DropdownNewMenuButton } from '../../../components/main/buttons/buttons';

// react icons
import { HiOutlineSearch } from 'react-icons/hi';

// Import Teacher Card
import TeacherCard from '../../../components/main/teacher/teacherscard';

import TeacherProfilePhoto from '../../../assets/images/teacherprofile.png';
import TeacherProfilePhoto1 from '../../../assets/images/teachers/teacher1.png';
import TeacherProfilePhoto2 from '../../../assets/images/teachers/teacher2.png';
import TeacherProfilePhoto3 from '../../../assets/images/teachers/teacher3.png';



const TeacherProfile = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto} alt="TeacherProfilePhoto" />
    </div>
  );
};

const TeacherProfile1 = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto1} alt="TeacherProfilePhoto" />
    </div>
  );
};

const TeacherProfile2 = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto2} alt="TeacherProfilePhoto" />
    </div>
  );
};

const TeacherProfile3 = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto3} alt="TeacherProfilePhoto" />
    </div>
  );
};
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
          <DropdownNewMenuButton
            title="new teacher"
            address1="/addteacher"
            addressTitle1="add teacher"
            address2="/importteacher"
            addressTitle2="import teacher"
          />
        </div>
        <div id="teacher-cards-list">
          <TeacherCard
            TeacherImg={TeacherProfile}
            TeacherName="Shaik Ahmed"
            TeacherCenter="jamia masjid"
          />
          <TeacherCard
            TeacherImg={TeacherProfile1}
            TeacherName="syed khaja"
            TeacherCenter="Abuzar Masjid"
          />
          <TeacherCard
            TeacherImg={TeacherProfile2}
            TeacherName="Shoeb Siddiqui"
            TeacherCenter="Hussaini Masjid"
          />
          <TeacherCard
            TeacherImg={TeacherProfile3}
            TeacherName="Mohd Jaffar"
            TeacherCenter="Yahiya Masjid
"
          />
        </div>
      </div>
    </section>
  );
};

export default Teacher;
