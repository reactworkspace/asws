import * as React from 'react';
import { Link } from 'react-router-dom';

//  import profile
// import TeacherProfile from '../../../assets/images/teacherprofile.png';

// react icons
import { BsTelephone, BsEnvelope } from 'react-icons/bs';

// Importing teacher data from data folder
// import teacherData from '../../../data/teacherdata';

const TeacherCard = (props) => {
  const {TeacherImg, TeacherName, TeacherCenter} = props;
  return (
    <Link to="/teacherdetails">
      <div id="teacher-card">
        <div className="teacher-card-profile">
          <img
            src={TeacherImg}
            alt="teacherprofile"
            className="teacher-profile-img"
          />
        </div>
        <div className="teacher-card-name poppins">
          <span>{TeacherName}</span>
        </div>
        <div className="teacher-card-zone">
          <span>{TeacherCenter}</span>
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
    </Link>
  );
};

export default TeacherCard;
