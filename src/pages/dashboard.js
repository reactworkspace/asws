import '../styles/index.css';
import '../styles/dashboard.css';
import '../styles/flex.css';
import '../styles/font.css';

import '../styles/userprofile.css';
import '../styles/studentprofile.css';
import '../styles/teacherprofile.css';

import React, { useState } from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';

// icons
import { ReactComponent as ZoneIcon } from '../assets/svg/zone.svg';
import { ReactComponent as StudentIcon } from '../assets/svg/student.svg';
import { ReactComponent as TeacherIcon } from '../assets/svg/teacher.svg';
import { ReactComponent as ThreeDotsIcons } from '../assets/svg/threedots.svg';

// react icons
import { FaFilter } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { BsCaretUpFill } from 'react-icons/bs';
// import {  AiOutlineBell } from 'react-icons/ai';


import StudentProfilePhoto from '../assets/images/studentprofile.png';
import TeacherProfilePhoto from '../assets/images/teacherprofile.png';

// import student data from data folder
import studentData from '../data/studentdata'

const CreateBtn = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className='create-btn-div'>
      <button className='create-btn Montserrat flex-c' onClick={toggleContent}>
        <TiPlus />
        <span>create</span>
      </button>
      {showContent && (
        <div className='create-btn-content Montserrat'
        >
          <div className='flex-r-sb'  onClick={toggleContent}>
            <span>Select</span>
             <BsCaretUpFill />
          </div>
          <div className='flex-col'>
            <a href='/addstudent'>student</a>
            <a href='/addteacher'>teacher</a>
            <a href='/addzone'>zone</a>
          </div>
        </div>
      )}
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

const TeacherProfile = () => {
  return (
    <div id="teacherprofile">
      <img src={TeacherProfilePhoto} alt="TeacherProfilePhoto" />
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








const Dashboard = () => {
  // Cards Data
  const cards = {
    student: '356',
    teachers: '38',
    centres: '15',
  };

  return (
    <section id="dashboard">
      {/* DASHBOARD SECTION */}
      <section className="dashboard-left">
        <div className="dashboard-heading flex-r-sb">
          <div>
            <span className="poppins-heading">dashboard</span>
          </div>
          <CreateBtn />
    
        </div>
        {/* CARDS SECTION */}
        <div id="cards">
          <div className="stc flex-c ">
            <div className="left flex-c">
              <StudentIcon className="stc-icons" />
            </div>
            <div className="right">
              <span className="title">students</span>
              <span className="total">{cards.student}</span>
            </div>
          </div>
          <div className="stc flex-c">
            <div className="left flex-c">
              <TeacherIcon className="stc-icons" />
            </div>
            <div className="right">
              <span className="title">teachers</span>
              <span className="total">{cards.teachers}</span>
            </div>
          </div>
          <div className="stc flex-c">
            <div className="left flex-c">
              <ZoneIcon className="stc-icons" />
            </div>
            <div className="right">
              <span className="title">centres</span>
              <span className="total ">{cards.centres}</span>
            </div>
          </div>
        </div>
        {/* ATTENDANCE SECTION */}
        <div id="attendance-section">
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
          <div className="attendance-barchart"></div>
        </div>

        <div id="recently-joined-students">
          <div className="poppins-sub-heading">
            <span>recently joined students</span>
          </div>
          <div>
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
          </div>
        </div>
      </section>

      {/* ASIDE SECTION */}
      <aside id="dashboard-right">
        <div className="flex-col">
          <UserProfile />

          {/* Recently Joined Teachers */}
          <div className="recently-joined-teachers">
            <span className="poppins-sub-heading">
              recently joined teachers
            </span>
            <div className="teachers-div flex">
              <div className="teachers-profile">
                <TeacherProfile />
              </div>
              <div className="teachers-details">
                <span className="teachers-name poppins-sub-heading-1rem">
                  shaik ahmed
                </span>
                <span className="teachers-centre">jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className="teachers-div flex">
              <div className="teachers-profile">
                <TeacherProfile />
              </div>
              <div className="teachers-details">
                <span className="teachers-name poppins-sub-heading-1rem">
                  shaik ahmed
                </span>
                <span className="teachers-centre">jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className="teachers-div flex">
              <div className="teachers-profile">
                <TeacherProfile />
              </div>
              <div className="teachers-details">
                <span className="teachers-name poppins-sub-heading-1rem">
                  shaik ahmed
                </span>
                <span className="teachers-centre">jamia masjid centre</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="teachers-div flex">
              <div className="teachers-profile">
                <TeacherProfile />
              </div>
              <div className="teachers-details">
                <span className="teachers-name  poppins-sub-heading-1rem">
                  shaik ahmed
                </span>
                <span className="teachers-centre">jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className="teachers-div flex">
              <div className="teachers-profile">
                <TeacherProfile />
              </div>
              <div className="teachers-details">
                <span className="teachers-name poppins-sub-heading-1rem">
                  shaik ahmed
                </span>
                <span className="teachers-centre">jamia masjid centre</span>
              </div>
            </div>
            <a href="/teacher">
              <div className="view-more-btn poppins flex-c">
                <span>view more</span>
              </div>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Dashboard;
