import '../styles/index.css';
import '../styles/dashboard.css';
import '../styles/flex.css';
import '../styles/font.css';

import '../styles/userprofile.css';
import '../styles/studentprofile.css';
import '../styles/teacherprofile.css';

import React from 'react';
import { useState, useEffect } from 'react';
// import {useState } from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

// Import Button components
import { DropdownMenuButton } from '../components/buttons';

// icons
import { ReactComponent as ZoneIcon } from '../assets/svg/zone.svg';
import { ReactComponent as StudentIcon } from '../assets/svg/student.svg';
import { ReactComponent as TeacherIcon } from '../assets/svg/teacher.svg';
import { ReactComponent as ThreeDotsIcons } from '../assets/svg/threedots.svg';

// react icons
import { FaFilter } from 'react-icons/fa';

// import {  AiOutlineBell } from 'react-icons/ai';

import StudentProfilePhoto from '../assets/images/studentprofile.png';
import TeacherProfilePhoto from '../assets/images/teacherprofile.png';

// import student data from data folder
import studentData from '../data/studentdata';

// import recharts
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

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

const DashboardAttendanceArray = [
  {
    week: 'week 1',
    present: 40,
    absent: 10,
    leave: 20,
  },
  {
    week: 'week 2',
    present: 25,
    absent: 10,
    leave: 15,
  },
  {
    week: 'week 3',
    present: 50,
    absent: 30,
    leave: 40,
  },
  {
    week: 'week 4',
    present: 40,
    absent: 30,
    leave: 20,
  },
  {
    week: 'week 5',
    present: 40,
    absent: 30,
    leave: 20,
  },
  {
    week: 'week 6',
    present: 40,
    absent: 30,
    leave: 20,
  },
  {
    week: 'week 7',
    present: 40,
    absent: 30,
    leave: 20,
  },
];
const AttendanceBarChart = () => {
  const [barSize, setBarSize] = useState(20);
  const [barGap, setBarGap] = useState(6);

  const updateBarSize = () => {
    const screenWidth = window.innerWidth;
    let newBarSize;
    let newBarGap;

    if (screenWidth >= 1440) {
      newBarSize = 20; 
      newBarGap = 6;
    } else if (screenWidth >= 1280) {
      newBarSize = 15; 
      newBarGap = 6;
    } else if (screenWidth >= 1024) {
      newBarSize = 15; 
      newBarGap = 6;
    } else if (screenWidth >= 768) {
      newBarSize = 11; 
      newBarGap = 6;
    } else {
      newBarSize = 8; 
      newBarGap = 6;
    }

    setBarSize(newBarSize);
    setBarGap(newBarGap);
  };

  useEffect(() => {
    updateBarSize(); // Initial barSize calculation

    window.addEventListener('resize', updateBarSize); // Update barSize on window resize

    return () => {
      window.removeEventListener('resize', updateBarSize); // Clean up the event listener
    };
  }, []);

  const renderCustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      // Extracting the dataKeys and values from the payload
      const { present, absent, leave } = payload[0].payload;

      return (
        <div className="tooltipStyle">
          <div className="flex p-a-l">
            <span className="circle bg-color-1"></span>
            <p>{present}% present</p>
          </div>
          <div className="flex p-a-l">
            <span className="circle bg-color-2"></span>
            <p>{absent}% absent</p>
          </div>
          <div className="flex p-a-l">
            <span className="circle bg-color-3"></span>
            <p>{leave}% leave</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart
        data={DashboardAttendanceArray}
        barGap={barGap}
        barCategoryGap="20%"
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip content={renderCustomTooltip} />
        <Bar
          dataKey="present"
          fill="#4cbc9a"
          barSize={barSize}
          radius={[7, 7, 7, 7]}
        />
        <Bar
          dataKey="absent"
          fill="#F95A77"
          barSize={barSize}
          radius={[7, 7, 7, 7]}
        />
        <Bar
          dataKey="leave"
          fill="#F4BE37"
          barSize={barSize}
          radius={[7, 7, 7, 7]}
        />
      </BarChart>
    </ResponsiveContainer>
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
          <DropdownMenuButton
            title="create"
            address1="/addstudent"
            addressTitle1="student"
            address2="/addteacher"
            addressTitle2="teacher"
            address3="/addzone"
            addressTitle3="zone"
          />
        </div>
        {/* CARDS SECTION */}
        <div id="cards">
          <Link to="/student">
            <div className="stc flex-c ">
              <div className="left flex-c">
                <StudentIcon className="stc-icons" />
              </div>
              <div className="right">
                <span className="title">students</span>
                <span className="total">{cards.student}</span>
              </div>
            </div>
          </Link>
          <Link to="teacher">
            <div className="stc flex-c">
              <div className="left flex-c">
                <TeacherIcon className="stc-icons" />
              </div>
              <div className="right">
                <span className="title">teachers</span>
                <span className="total">{cards.teachers}</span>
              </div>
            </div>
          </Link>

          <Link to="zone">
            <div className="stc flex-c">
              <div className="left flex-c">
                <ZoneIcon className="stc-icons" />
              </div>
              <div className="right">
                <span className="title">centres</span>
                <span className="total ">{cards.centres}</span>
              </div>
            </div>
          </Link>
        </div>
        {/* ATTENDANCE SECTION */}
        <div id="attendance-section">
          <div className="flex-r-sb p2rem">
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
          <div className="attendance-barchart">
            <AttendanceBarChart />
          </div>
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
            <Link to="/teacher">
              <div className="view-more-btn poppins flex-c">
                <span>view more</span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Dashboard;
