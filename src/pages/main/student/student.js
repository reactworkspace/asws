// CSS
import '../../../assets/css/index.css';
import '../../../assets/css/student.css';
import '../../../assets/css/font.css';
import '../../../assets/css/flex.css';

import * as React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../../../components/main/profile/userprofile';

// Import Button Componenets
import { DropdownNewMenuButton } from '../../../components/main/buttons/buttons';

// react icons
import { HiOutlineSearch } from 'react-icons/hi';

// import svg
import { ReactComponent as ThreeDotsIcons } from '../../../assets/svg/threedots.svg';

// import image address
// import StudentProfilePhoto from '../../../assets/images/studentprofile.png';

//  student images
import StudentProfilePhoto1 from '../../../assets/images/students/student_img_1.jpeg';
import StudentProfilePhoto2 from '../../../assets/images/students/student_img_2.jpeg';
import StudentProfilePhoto3 from '../../../assets/images/students/student_img_3.jpeg';
import StudentProfilePhoto4 from '../../../assets/images/students/student_img_4.jpeg';
import StudentProfilePhoto5 from '../../../assets/images/students/student_img_5.jpeg';
import StudentProfilePhoto6 from '../../../assets/images/students/student_img_6.jpeg';
import StudentProfilePhoto7 from '../../../assets/images/students/student_img_7.jpeg';
import StudentProfilePhoto8 from '../../../assets/images/students/student_img_8.jpeg';
import StudentProfilePhoto9 from '../../../assets/images/students/student_img_9.jpeg';
// import StudentProfilePhoto10 from '../../../assets/images/students/student_img_10.jpeg';

const StudentProfile = (props) => {
  const { imgSrc } = props;
  return (
    <div id="studentprofile">
      <img src={imgSrc} alt="StudentProfilePhoto" />
    </div>
  );
};

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

const StudentTable = () => {
  return (
    <table>
      <thead>
        <tr>
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
      </tbody>
    </table>
  );
};

export const StudentTableRowData = () => {
  return (
    <>
      <tr>
        {' '}
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto1} />
        </td>
        <td>
          <Link to="studentdetails">sameed bin ali </Link>
        </td>{' '}
        <td>ID: 101</td>
        <td> July 21 2023</td>
        <td>Mohd Mejraj</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>
      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto2} />
        </td>
        <td>syed ahmed ali </td>
        <td>ID: 102</td>
        <td>July 21 2023</td>
        <td>Mohd Ahmed</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>
      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto3} />
        </td>
        <td>mohd Amar abdul ahad</td>
        <td>ID: 103</td>
        <td>July 21 2023</td>
        <td>Mohd Ghouse</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>

      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto4} />
        </td>
        <td>syed haris hassan</td>
        <td>ID: 104</td>
        <td>July 21 2023</td>
        <td>Mohd Sohial</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>

      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto5} />
        </td>
        <td>abdul quddus</td>
        <td>ID: 105</td>
        <td>July 21 2023</td>
        <td>Mohd Umran</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>

      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto6} />
        </td>
        <td>mohd mustafa hussain</td>
        <td>ID: 106</td>
        <td>July 21 2023</td>
        <td>Mohd Omer</td>
        <td>Ranga Reddy</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>

      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto7} />
        </td>
        <td>mohd misbah</td>
        <td>ID: 107</td>
        <td>July 21 2023</td>
        <td>Syed Owais</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>
      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto8} />
        </td>
        <td>Mohd Muzammil</td>
        <td>ID: 108</td>
        <td>July 21 2023</td>
        <td>Mohd Hussain</td>
        <td>Ranga Reddyd</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>
      <tr>
        <td>
          <StudentProfile imgSrc={StudentProfilePhoto9} />
        </td>
        <td>Mohd Huzaif</td>
        <td>ID: 109</td>
        <td>July 21 2023</td>
        <td>Mohd Younsuf</td>
        <td>Hyderbad</td>
        <td>984765261</td>
        <td>IV</td>
        <td>
          <ThreeDotsIcons />
        </td>
      </tr>
    </>
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
            <DropdownNewMenuButton
              title="new student"
              address1="/addstudent"
              addressTitle1="add student"
              address2="/importstudent"
              addressTitle2="import student"
            />
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
