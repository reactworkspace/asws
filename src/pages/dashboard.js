import './styles/dashboard.css';
import './styles/userprofile.css'
import './styles/font.css'
import React from 'react';

// icons
import { ReactComponent as ZoneIcon } from '../assets/svg/zone.svg';
import { ReactComponent as StudentIcon } from '../assets/svg/student.svg';
import { ReactComponent as TeacherIcon } from '../assets/svg/teacher.svg';
import { ReactComponent as ThreeDotsIcons } from '../assets/svg/threedots.svg';
import { ReactComponent as BellIcon } from '../assets/svg/bell.svg';

// react icons
import { FaFilter } from 'react-icons/fa';

import ProfilePhoto from '../assets/images/profile.png';

const Profile = () => {
  return (
    <div id="profile">
      <img src={ProfilePhoto} alt="ProfilePhoto" width={200} />
    </div>
  );
};

const Dashboard = () => {
  // Cards Data
  const cards = {
    student: '356',
    teachers: '38',
    centres: '15',
  };

  const userInfo = {
    firstName: 'yahiya',
    lastName: 'ali',
    role: 'admin',
  };

  return (
    <section id="dashboard">
      {/* DASHBOARD SECTION */}
      <section className="dashboard-left">
        <div className="dashboard-heading flex-r-sb">
          <div>
            <span className="poppins-heading">dashboard</span>
          </div>

          <button className="create-btn Montserrat">
            <span>+</span>
            <span>create</span>
          </button>
        </div>
        {/* CARDS SECTION */}
        <div id="cards">
          <div className="stc flex-s ">
            <div className="left flex-c">
              <StudentIcon className="stc-icons" />
            </div>
            <div className="right">
              <span className="title">students</span>
              <span className="total">{cards.student}</span>
            </div>
          </div>
          <div className="stc flex-s">
            <div className="left flex-c">
              <TeacherIcon className="stc-icons" />
            </div>
            <div className="right">
              <span className="title">teachers</span>
              <span className="total">{cards.teachers}</span>
            </div>
          </div>
          <div className="stc flex-s">
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
        <div id="attendance">
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
                <th></th>
                <th>name</th>
                <th>id</th>
                <th>centre</th>
                <th>contact no</th>
                <th>admission date</th>
                <th> </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Profile />
                  </td>
                  <td> Mohd Kashif</td>
                  <td>ID: 123456789</td>
                  <td>Zeba Masjid</td>
                  <td>8686081162</td>
                  <td>22/02/2022</td>
                  <td>
                    <ThreeDotsIcons />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ASIDE SECTION */}
      <aside id="dashboard-right">
        <div className="flex-r-sb">
          <div className="notification">
            <BellIcon />
            <span className="notification-count"></span>
          </div>
          <div className="username">
            <span className="poppins">
              {userInfo.firstName}
              {userInfo.lastName}
            </span>
            <span className="poppins-w400">{userInfo.role}</span>
          </div>
          <Profile />

          {/* Recently Joined Teachers */}
          <div className="recently-joined-teachers">
            <span className='poppins-sub-heading'>recently joined teachers</span>
            <div className='teachers-div flex'>
              <div className='teachers-profile'>
                <Profile />
              </div>
              <div className='teachers-details'>
                <span className='teachers-name poppins-sub-heading-1rem'>shaik ahmed</span>
                <span className='teachers-centre'>jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className='teachers-div flex'>
              <div className='teachers-profile'>
                <Profile />
              </div>
              <div className='teachers-details'>
                <span className='teachers-name poppins-sub-heading-1rem'>shaik ahmed</span>
                <span className='teachers-centre'>jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className='teachers-div flex'>
              <div className='teachers-profile'>
                <Profile />
              </div>
              <div className='teachers-details'>
                <span className='teachers-name poppins-sub-heading-1rem'>shaik ahmed</span>
                <span className='teachers-centre'>jamia masjid centre</span>
              </div>
            </div>
            <div className="line"></div><div className='teachers-div flex'>
              <div className='teachers-profile'>
                <Profile />
              </div>
              <div className='teachers-details'>
                <span className='teachers-name  poppins-sub-heading-1rem'>shaik ahmed</span>
                <span className='teachers-centre'>jamia masjid centre</span>
              </div>
            </div>
            <div className="line "></div>
            <div className='teachers-div flex'>
              <div className='teachers-profile'>
                <Profile />
              </div>
              <div className='teachers-details'>
                <span className='teachers-name poppins-sub-heading-1rem'>shaik ahmed</span>
                <span className='teachers-centre'>jamia masjid centre</span>
              </div>
            </div>
            <div className="view-more-btn poppins flex-c">
              <span>view more</span>
            </div>
          </div>
        </div>
        

      </aside>
    </section>
  );
};

export default Dashboard;
