// CSS
import '../styles/index.css';
import '../styles/studentdetails.css';
import '../styles/font.css';
import '../styles/flex.css';

import * as React from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

const StudentDetails = () => {
  return (
    <section id="studentdetails">
      <div className="studentdetails-heading flex-r-sb">
        <div>
          <span className="poppins-heading">
            <Link to="/student">student</Link>
            {' > '} <span className="poppins "> student details</span>
          </span>
        </div>
        <UserProfile />
      </div>
    </section>
  );
};

export default StudentDetails;
