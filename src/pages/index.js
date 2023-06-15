import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// styles
import '../styles/index.css';
import '../styles/font.css';
import '../styles/flex.css';

import Dashboard from './dashboard';
import Zone from './zone';
import Student from './student';
import Teacher from './teacher';
import Attendance from './attendance';
import Syllabus from './syllabus';
import Setting from './setting';

import AddStudent from './addstudent';
import AddTeacher from './addteacher';
import AddZone from './addzone';

// import ImportStudent from './importstudent';
// import ImportTeacher from './importteacher';
// import ImportZone from './importzone';

import { ImportZone, ImportStudent, ImportTeacher } from './import';

import StudentDetails from './studentdetails';
import TeacherDetails from './teacherdetails';
import ZoneDetails from './zonedetails';

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

const AswsIndex = () => {
  const currentUrl = window.location.pathname;
  const modifiedUrl = currentUrl.substring(1);

  let navUrl;

  if (modifiedUrl === 'dashboard') {
    navUrl = modifiedUrl;
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
  } else if (modifiedUrl === 'syllabus') {
    navUrl = modifiedUrl;
  } else if (modifiedUrl === 'setting') {
    navUrl = modifiedUrl;
  } else {
    console.log('Error');
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
                <Link to="/dashboard" onClick={() => handleClick('dashboard')}>
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
                  <Link
                    to="/dashboard"
                    onClick={() => handleClick('dashboard')}
                  >
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
            </div>
          </nav>
          <section>
            <section id="main-section">
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/zone" element={<Zone />} />
                <Route exact path="/student" element={<Student />} />
                <Route exact path="/teacher" element={<Teacher />} />
                <Route exact path="/attendance" element={<Attendance />} />
                <Route exact path="/syllabus" element={<Syllabus />} />
                <Route exact path="/setting" element={<Setting />} />

                <Route exact path="/addstudent" element={<AddStudent />} />
                <Route exact path="/addteacher" element={<AddTeacher />} />
                <Route exact path="/addzone" element={<AddZone />} />

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
