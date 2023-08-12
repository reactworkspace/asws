import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// styles
import '../assets/css/index.css';
import '../assets/css/font.css';
import '../assets/css/flex.css';

import Dashboard from './main/dashbaord/dashboard';
import Zone from './main/zone/zone';
import Student from './main/student/student';
import Teacher from './main/teacher/teacher';
import Attendance from './main/attendance/attendance';
import Syllabus from './main/syllabus/syllabus';
import Setting from './main/setting/setting';

import AddStudent from './main/student/addstudent/addstudent';
import AddTeacher from './main/teacher/addteacher/addteacher';
import AddZone from './main/zone/addzone/addzone';
import AddSubject from './main/syllabus/addsubject/addsubject';

import {
  ImportZone,
  ImportStudent,
  ImportTeacher,
} from '../components/main/import/import';

import StudentDetails from './main/student/studentdetails/studentdetails';
import TeacherDetails from './main/teacher/teacherdetails/teacherdetails';
import ZoneDetails from './main/zone/zonedetails/zonedetails';

// react-icons
import { BsGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

// Logo & Icons
import { ReactComponent as AswsLogo } from '../assets/svg/aswslogo.svg';
import { ReactComponent as ZoneIcon } from '../assets/svg/zone.svg';
import { ReactComponent as StudentIcon } from '../assets/svg/student.svg';
import { ReactComponent as TeacherIcon } from '../assets/svg/teacher.svg';
import { ReactComponent as NotesIcon } from '../assets/svg/notes.svg';
import { ReactComponent as SettingIcons } from '../assets/svg/setting.svg';

// hooks
import { useState } from 'react';

//  import profile
import UserProfilePhoto from '../assets/images/userprofile.png';

const UserProfile = () => {
  return (
    <div id="userprofile">
      <img src={UserProfilePhoto} alt="UserProfilePhoto" />
    </div>
  );
};

// export const LogoutComponent = () => {

//   return (
//     <div className="logout-button">
//       <span> Logout</span>
//     </div>
//   );
// };

const AswsIndex = () => {
  const currentUrl = window.location.pathname;
  const modifiedUrl = currentUrl.substring(1);

  let navUrl;

  if (modifiedUrl === '') {
    navUrl = 'dashboard';
  } else if (
    modifiedUrl === 'zone' ||
    modifiedUrl === 'addzone' ||
    modifiedUrl === 'zonedetails' ||
    modifiedUrl === 'importzone'
  ) {
    navUrl = 'zone';
  } else if (
    modifiedUrl === 'student' ||
    modifiedUrl === 'addstudent' ||
    modifiedUrl === 'studentdetails' ||
    modifiedUrl === 'importstudent'
  ) {
    navUrl = 'student';
  } else if (
    modifiedUrl === 'teacher' ||
    modifiedUrl === 'addteacher' ||
    modifiedUrl === 'teacherdetails' ||
    modifiedUrl === 'importteacher'
  ) {
    navUrl = 'teacher';
  } else if (modifiedUrl === 'attendance') {
    navUrl = modifiedUrl;
  } else if (modifiedUrl === 'syllabus' || modifiedUrl === 'addsubject') {
    navUrl = 'syllabus';
  } else if (modifiedUrl === 'setting') {
    navUrl = modifiedUrl;
  } else {
    // console.log('Error');
  }

  // hook to set the active onClick event
  const [isActive, setActive] = useState(navUrl);

  const handleClick = (isActiveItem) => {
    setActive(isActiveItem);
    // This if condition is use only for 320px to 767px screen
    if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      // This will close the menu
      setIsMenuOpen(false);
    }
  };

  // Toggle Nav bar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //logout
  const handleLogout = () => {
    // Clear the session storage or local storage based on your logic
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');

    // Redirect the user to the desired page after logout
    window.location.href = '/'; // Replace 'login' with your actual login page route
  };

  return (
    <>
      <Router>
        <header>
          <div>
            <GiHamburgerMenu
              className={`icon ${isMenuOpen ? 'open' : ''}`}
              onClick={handleMenuToggle}
            />
          </div>
          <div>
            <AswsLogo />
          </div>
          <div>
            <UserProfile />
          </div>
        </header>
        <div id="hamburger-menu">
          {isMenuOpen && (
            <ul className="poppins">
              <li>
                <Link to="/" onClick={() => handleClick('dashboard')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'dashboard' ? 'active' : ''
                    }`}
                  >
                    <BsGridFill className="nav-icons" />
                    <span>dashboard</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/zone" onClick={() => handleClick('zone')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'zone' ? 'active' : ''
                    }`}
                  >
                    <ZoneIcon className="nav-icons" />
                    <span>zone</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/student" onClick={() => handleClick('student')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'student' ? 'active' : ''
                    }`}
                  >
                    <StudentIcon className="nav-icons" />
                    <span>student</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/teacher" onClick={() => handleClick('teacher')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'teacher' ? 'active' : ''
                    }`}
                  >
                    <TeacherIcon className="nav-icons" />
                    <span>teacher</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/attendance"
                  onClick={() => handleClick('attendance')}
                >
                  <div
                    className={`flex list-button ${
                      isActive === 'attendance' ? 'active' : ''
                    }`}
                  >
                    <NotesIcon className="nav-icons" />
                    <span>attendance</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/syllabus" onClick={() => handleClick('syllabus')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'syllabus' ? 'active' : ''
                    }`}
                  >
                    <NotesIcon className="nav-icons" />
                    <span>syllabus</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/setting" onClick={() => handleClick('setting')}>
                  <div
                    className={`flex list-button ${
                      isActive === 'setting' ? 'active' : ''
                    }`}
                  >
                    <SettingIcons className="nav-icons" />
                    <span>setting</span>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Body Section */}
        <section id="body-section">
          <nav className="navbar">
            <div className="aswslogo">
              <AswsLogo />
            </div>
            <div id="navbar-list">
              <ul className="poppins">
                <li>
                  <Link to="/" onClick={() => handleClick('dashboard')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'dashboard' ? 'active' : ''
                      }`}
                    >
                      <BsGridFill className="nav-icons" />
                      <span>dashboard</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/zone" onClick={() => handleClick('zone')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'zone' ? 'active' : ''
                      }`}
                    >
                      <ZoneIcon className="nav-icons" />
                      <span>zone</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/student" onClick={() => handleClick('student')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'student' ? 'active' : ''
                      }`}
                    >
                      <StudentIcon className="nav-icons" />
                      <span>student</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/teacher" onClick={() => handleClick('teacher')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'teacher' ? 'active' : ''
                      }`}
                    >
                      <TeacherIcon className="nav-icons" />
                      <span>teacher</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attendance"
                    onClick={() => handleClick('attendance')}
                  >
                    <div
                      className={`flex list-button ${
                        isActive === 'attendance' ? 'active' : ''
                      }`}
                    >
                      <NotesIcon className="nav-icons" />
                      <span>attendance</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/syllabus" onClick={() => handleClick('syllabus')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'syllabus' ? 'active' : ''
                      }`}
                    >
                      <NotesIcon className="nav-icons" />
                      <span>syllabus</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/setting" onClick={() => handleClick('setting')}>
                    <div
                      className={`flex list-button ${
                        isActive === 'setting' ? 'active' : ''
                      }`}
                    >
                      <SettingIcons className="nav-icons" />
                      <span>setting</span>
                    </div>
                  </Link>
                </li>
                <li></li>
                <li></li>
                <li  onClick={handleLogout} > 
                  <Link >
                    <div
                      className={`flex list-button ${
                        isActive === 'setting' ? 'active' : ''
                      }`}
                    >
                      <SettingIcons className="nav-icons" />
                      <span>logout</span>
                    </div>
                  </Link>
                </li>
                
                
              </ul>
            </div>
          </nav>
          <section>
            <section id="main-section">
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/zone" element={<Zone />} />
                <Route exact path="/student" element={<Student />} />
                <Route exact path="/teacher" element={<Teacher />} />
                <Route exact path="/attendance" element={<Attendance />} />
                <Route exact path="/syllabus" element={<Syllabus />} />
                <Route exact path="/setting" element={<Setting />} />

                <Route exact path="/addstudent" element={<AddStudent />} />
                <Route exact path="/addteacher" element={<AddTeacher />} />
                <Route exact path="/addzone" element={<AddZone />} />
                <Route exact path="/addsubject" element={<AddSubject />} />

                <Route
                  exact
                  path="/studentdetails"
                  element={<StudentDetails />}
                />

                <Route
                  exact
                  path="/teacherdetails"
                  element={<TeacherDetails />}
                />
                <Route exact path="/zonedetails" element={<ZoneDetails />} />

                <Route
                  exact
                  path="/importstudent"
                  element={<ImportStudent />}
                />

                <Route
                  exact
                  path="/importteacher"
                  element={<ImportTeacher />}
                />

                <Route exact path="/importzone" element={<ImportZone />} />
              </Routes>
            </section>
          </section>
        </section>
      </Router>
    </>
  );
};

export default AswsIndex;
