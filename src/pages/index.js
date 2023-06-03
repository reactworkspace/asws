import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// styles
import './index.css';

import Dashboard from './dashboard';
import Zone from './zone';
import Student from './student';
import Teacher from './teacher';
import Attendance from './attendance';
import Syllabus from './syllabus';
import Setting from './setting';

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

const AswsIndex = () => {
  // hook to set the active onClick event
  const [isActive, setActive] = useState('dashboard');
  const handleClick = (isActiveItem) => {
    setActive(isActiveItem);
    if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      setIsMenuOpen(false);
    }
  };

  // Toggle Nav bar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // setIsMenuOpen(false);

  return (
    <>
      <Router>
        <header id="header-menu">
          <div>
            <GiHamburgerMenu
              className={`icon ${isMenuOpen ? 'open' : ''}`}
              onClick={handleMenuToggle}
            />
          </div>
          <div>
            <figure>
              <AswsLogo />
            </figure>
          </div>
          <div>Profile</div>
        </header>
        <div className="hamburger-menu">
          {isMenuOpen && (
            <ul className="popines">
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

        <section id="body-section">
          <nav className="navbar">
            <div className="aswslogo">
              <figure>
                <AswsLogo />
              </figure>
            </div>
            <div id="navbar-list">
              <ul className="popines">
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
            </div>
          </nav>
          <main>
            <section id="main-section">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/zone" element={<Zone />} />
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/syllabus" element={<Syllabus />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </section>
          </main>
        </section>
      </Router>
    </>
  );
};

export default AswsIndex;
