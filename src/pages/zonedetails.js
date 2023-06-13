// CSS
import '../styles/index.css';
import '../styles/zonedetails.css';
import '../styles/font.css';
import '../styles/flex.css';

import React, { useState } from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';

// import zone data
import ZoneData from '../data/zonedata';

// import cnetre image address
import CentreImgage from '../assets/images/centrephoto.png';
import StudentProfilePhoto from '../assets/images/studentprofile.png';
import TeacherProfilePhoto from '../assets/images/teacherprofile.png';

// import react icons
import { BsPerson, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';

// import svg
import { ReactComponent as PersonIcon } from '../assets/svg/personicon.svg';
import { ReactComponent as ThreeDotsIcons } from '../assets/svg/threedots.svg';

// import student data
import studentData from '../data/studentdata';
import teacherData from '../data/teacherdata';

const CentreInformationData = () => {
  return (
    <div id="centre-info-card">
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>head teacher</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsPerson className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>mohd hussain uddin</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>zone coordinator</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsPerson className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>syed taha ahmed</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>waqf border no.</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsPerson className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>11251QF113</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>head teacher no</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsTelephone className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>+91 9966996515</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>zone coordinator no</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsTelephone className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>+91 970045413</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>masjid head name</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsPerson className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>mohd saleh</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>masjid head no.</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsTelephone className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>+91 9966996515</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>email address</span>
        </div>
        <div className="field-data-div flex ">
          <div className="field-icon-div">
            <BsEnvelope className="field-icon" />
          </div>
          <div className="field-text-data">
            <span>masjidenoor123@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="centre-field flex-col">
        <div className="label-heading poppins">
          <span>address</span>
        </div>
        <div className="field-data-div flex">
          <div className="field-icon-div">
            <BsGeoAlt className="field-icon" />
          </div>
          <div className="field-text-data">
            <div>20-57-1523/21/201/A, </div>
            <div>Oppsite charminar hospital, </div>
            <div>shah ali banda, hyderabad 50002</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentProfile = () => {
  return (
    <div id="studentprofile">
      <img src={StudentProfilePhoto} alt="StudentProfilePhoto" />
    </div>
  );
};

const StudentTrData = () => {
  return (
    <tr>
      <td>
        <StudentProfile />
      </td>
      <td> {studentData.studentName}</td>
      <td>ID: {studentData.studentId}</td>
      <td>{studentData.centreName}</td>
      <td>{studentData.studentContactNum1}</td>
      <td>{studentData.addmissionDate}</td>
      <td>
        <ThreeDotsIcons />
      </td>
    </tr>
  );
};

const StudentContent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>name</th>
          <th>id</th>
          <th>centre</th>
          <th>contact no</th>
          <th>admission date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <StudentTrData />
        <StudentTrData />
        <StudentTrData />
        <StudentTrData />
        <StudentTrData />
        <StudentTrData />
        <StudentTrData />
      </tbody>
    </table>
  );
};

const TeacherProfile = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto} alt="TeacherProfilePhoto" />
    </div>
  );
};

const TeacherTrData = () => {
  return (
    <tr>
      <td>
        <TeacherProfile />
      </td>
      <td> {teacherData.teacherName}</td>
      <td>ID: {teacherData.teacherId}</td>
      <td>{teacherData.centreName}</td>
      <td>{teacherData.phoneNumber}</td>
      <td>{teacherData.dateofjoining}</td>
      <td>
        <ThreeDotsIcons />
      </td>
    </tr>
  );
};

const TeacherContent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>name</th>
          <th>id</th>
          <th>centre</th>
          <th>contact no</th>
          <th>date of joining</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <TeacherTrData />
        <TeacherTrData />
        <TeacherTrData />
        <TeacherTrData />
        <TeacherTrData />
        <TeacherTrData />
        <TeacherTrData />
      </tbody>
    </table>
  );
};

const ZoneDetails = () => {
  const [displayContent, setDisplayContent] = useState('student');

  const handleButtonClick = (content) => {
    setDisplayContent(content);
  };

  return (
    <section id="zonedetails">
      <div>
        <div className="zonedetails-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <a href="/zone">zone</a>
              <span className="poppins ">
                {'>'} {ZoneData.centreName}
              </span>
            </span>
          </div>
          <UserProfile />
        </div>

        {/* Centre Details  */}
        <div id="centre-details">
          <div className="centre-profile-div">
            <div>
              <img src={CentreImgage} alt="" className="centre-img" />
            </div>
            <div className="centre-st-cards">
              <div className="centre-person-icon-div bg-color-blue">
                <PersonIcon className="centre-person-icon" />
              </div>
              <div className="centre-card-heading">
                <span>students</span>
                <span className="cards-number">10</span>
              </div>
            </div>
            <div className="centre-st-cards">
              <div className="centre-person-icon-div bg-color-orange">
                <PersonIcon className="centre-person-icon" />
              </div>
              <div className="centre-card-heading">
                <span>teachers</span>
                <span className="cards-number">01</span>
              </div>
            </div>
          </div>

          {/* Centre Information */}
          <div id="centre-info">
            <div className="poppins-heading">
              <span>centre information</span>
            </div>
            <CentreInformationData />
          </div>

          {/* Centre Attendance Performance */}
          <div id="centre-attendance-performace">
            <div className="poppins-heading">
              <span>centre attendance performace</span>
            </div>
            <div className="attendance-performance-div poppins ">
        
                <div className='poppins-w400"'>
                  <span>student</span>
                </div>
                <div className="flex-r-sb">
                  <div>
                    <span className="inter-heading">attendance</span>
                  </div>
                  <div className="flex inter-regular p-a-l ">
                    <span className="circle bg-color-1"></span>
                    <span>present</span>
                    <span className="circle bg-color-2"></span>
                    <span>absent</span>
                    <span className="circle bg-color-3"></span>
                    <span>leave</span>
                  </div>
                  <div className="filters-btn flex-c">
                    <FaFilter />
                    <span>filters</span>
                  </div>
                </div>
                <div className="attendance-performance-barchart">


            

                </div>
          
            </div>
          </div>

          {/* Overall Users */}
          <div id="overall-users">
            <div className="poppins-heading">
              <span>overall users</span>
            </div>
            <div className="overall-card-div">
              <div className="flex">
                <div className="student-button-div">
                  <button
                    onClick={() => handleButtonClick('student')}
                    className={`overall-buttons ${
                      displayContent === 'student' ? 'active' : ''
                    }`}
                  >
                    <span>student</span>
                  </button>
                </div>
                <div className="teacher-button-div">
                  <button
                    onClick={() => handleButtonClick('teacher')}
                    className={`overall-buttons ${
                      displayContent === 'teacher' ? 'active' : ''
                    }`}
                  >
                    <span>teacher</span>
                  </button>
                </div>
              </div>

              <div className="overall-content-div poppins-sub-heading">
                {displayContent === 'student' ? (
                  <StudentContent />
                ) : (
                  <TeacherContent />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneDetails;
