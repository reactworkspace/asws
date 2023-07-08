import '../styles/index.css';
import '../styles/dashboard.css';
import '../styles/flex.css';
import '../styles/font.css';

import '../styles/userprofile.css';
import '../styles/studentprofile.css';
import '../styles/teacherprofile.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
import studentData from '../data/studentdata';

// import recharts
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const CreateBtn = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="create-btn-div">
      <button className="create-btn Montserrat flex-c" onClick={toggleContent}>
        <TiPlus />
        <span>create</span>
      </button>
      {showContent && (
        <div className="create-btn-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to="/addstudent">student</Link>
            <Link to="/addteacher">teacher</Link>
            <Link to="/addzone">zone</Link>
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
  const renderCustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      // Extracting the dataKeys and values from the payload
      const { present, absent, leave } = payload[0].payload;

      return (
        <div className="tooltipStyle">
          <div className='flex p-a-l'>
            <span className="circle bg-color-1"></span>
            <p>{present}% present</p>
          </div>
          <div className='flex p-a-l'>
            <span className="circle bg-color-2"></span>
            <p>{absent}% absent</p>
          </div>
          <div className='flex p-a-l'>
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
        barGap={10}
        barCategoryGap="20%"
      >
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip content={renderCustomTooltip} />
        <Bar
          dataKey="present"
          fill="#4cbc9a"
          barSize={25}
          radius={[10, 10, 10, 10]}
        />
        <Bar
          dataKey="absent"
          fill="#F95A77"
          barSize={25}
          radius={[10, 10, 10, 10]}
        />
        <Bar
          dataKey="leave"
          fill="#F4BE37"
          barSize={25}
          radius={[10, 10, 10, 10]}
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
