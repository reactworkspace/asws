// CSS
import '../styles/index.css';
import '../styles/student.css';
import '../styles/font.css';
import '../styles/flex.css';

import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

// react icons
import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsCaretUpFill } from 'react-icons/bs';

const SearchStudent = () => {
  return (
    <div className="search-student-div">
      <input
        type="text"
        id="search-student"
        placeholder="Search Student here.."
      />
      <HiOutlineSearch className="search-student-icon" />
    </div>
  );
};

const NewStudentButton = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="new-student-btn-div">
      <button
        className="new-student-btn Montserrat flex-c"
        onClick={toggleContent}
      >
        <TiPlus />
        <span>new student</span>
      </button>
      {showContent && (
        <div className="new-student-btn-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <a href="/addstudent">add student</a>
            <a href="/importstudent">import student</a>
          </div>
        </div>
      )}
    </div>
  );
};

const StudentTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>name</th>
          <th>ID</th>
          <th>admission date</th>
          <th>parent name</th>
          <th>city</th>
          <th>contact</th>
          <th>class</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
        <StudentTableRowData />
      </tbody>
    </table>
  );
};

const StudentTableRowData = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td>
        <Link to="/studentdetails">mohd kashif </Link>
      </td>
      <td>#123456789</td>
      <td className="muted-text">march 25 2021</td>
      <td>mohd hussain</td>
      <td>hyderabad</td>
      <td>contact</td>
      <td>iv</td>
      <td>action</td>
    </tr>
  );
};

const Student = () => {
  return (
    <section id="student">
      <div>
        <div>
          <div className="student-heading flex-r-sb">
            <div>
              <span className="poppins-heading">
                student <span className="poppins "></span>
              </span>
            </div>
            <UserProfile />
          </div>

          <div className="student-search-btn flex-r-sb">
            <SearchStudent />
            <NewStudentButton />
          </div>
        </div>

        {/* student table */}
        <div className="student-table-div">
          <div>
            <StudentTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
