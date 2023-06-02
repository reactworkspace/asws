import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import styles from '../styles/asws.module.css';
import Dashboard from './dashboard';
import Zone from './zone';
import Student from './student';
import Teacher from './teacher';
import Attendance from './attendance';
import Syllabus from './syllabus';
import Setting from './setting';

const AswsIndex = () => {
  return (
    <>
      {/* <header className="headerSection">
        <div></div>
      </header> */}
      <Router>
        <nav className="navbar">
          <div className="logo">
            <figure>{/* <img src="" alt="" /> */}</figure>
          </div>
          <div>
            <div> logo</div>
            <div>
              <ul>
                <li>
                  <Link to="/">
                    <span>Logo</span>
                    <span>dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/zone">
                    <span>Logo</span>
                    <span>zone</span>
                  </Link>
                </li>
                <li>
                  <Link to="/student">
                    <span>Logo</span>
                    <span>student</span>
                  </Link>
                </li>
                <li>
                  <Link to="/teacher">
                    <span>Logo</span>
                    <span>teacher</span>
                  </Link>
                </li>
                <li>
                  <Link to="/attendance">
                    <span>Logo</span>
                    <span>attendance</span>
                  </Link>
                </li>
                <li>
                  <Link to="/syllabus">
                    <span>Logo</span>
                    <span>syllabus</span>
                  </Link>
                </li>
                <li>
                  <Link to="/setting">
                    <span>Logo</span>
                    <span>setting</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <section className="main-section">
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
      </Router>
    </>
  );
};

export default AswsIndex;
