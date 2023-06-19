// CSS
import '../styles/index.css';
import '../styles/studentdetails.css';
import '../styles/detailscard.css';
import '../styles/font.css';
import '../styles/flex.css';


import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

// Import student profile components
import StudentProfilePhoto from '../assets/images/studentprofile.png';

// Import icons using SVG
import { ReactComponent as EditPencil } from '../assets/svg/edit.svg';
import { ReactComponent as CAPpresent } from '../assets/svg/cap-present.svg';
import { ReactComponent as CAPleave } from '../assets/svg/cap-leave.svg';
import { ReactComponent as CAPabsent } from '../assets/svg/cap-absent.svg';

// Import icons using react icons
import { BsThreeDotsVertical, BsPerson } from 'react-icons/bs';

// Import rechart

const StudentDetailsCardData = () => {
  return (
    <div>
      <div className="details-card-data-heading poppins">
        <span>student's information</span>
      </div>
      <div id="details-card-data-grid">
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>parents/guardian</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>mohd hussain uddin</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>aadhar no.</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>4455 2562 1133</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>phone</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>+91 8801970518</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>date of birth</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>30/052005</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>school name</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>crown high school</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>address</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>shah ali banda, hyderabad</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>pin code</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>500065</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>city</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>hyderabad</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>state</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>telangana</span>
            </div>
          </div>
        </div>
      </div>
      <div className="details-card-data-heading poppins">
        <span>sibling information</span>
      </div>
      <div id="details-card-data-grid">
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>relation</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>sister</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>name</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>fouzia fatima</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>age</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>standard</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>sixth</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>school</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>crown mission high school</span>
            </div>
          </div>
        </div>
      </div>

      <div className="details-card-data-heading poppins">
        <span>parents information</span>
      </div>

      <div id="details-card-data-grid">
        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>name</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>mohd hussain uddin</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>email</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>hussain@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>phone</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>+91 9966996515</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>head teacher</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>mohd hussain uddin</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>qualification</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>b.com {'(General)'}</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>occupation</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>businessman</span>
            </div>
          </div>
        </div>

        <div className="details-field flex-col">
          <div className="label-heading poppins">
            <span>relation</span>
          </div>
          <div className="field-data-div flex ">
            <div className="field-icon-div">
              <BsPerson className="field-icon" />
            </div>
            <div className="field-text-data">
              <span>mohd hussain uddin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const StudentDetails = () => {
  return (
    <section id="studentdetails">
      <div>
        <div className="studentdetails-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/student">student</Link>
              {' > '} <span className="poppins "> student details</span>
            </span>
          </div>
          <UserProfile />
        </div>

        {/* student card div */}
        <div id="details-card-div">
          <div className="details-card">
            <div className="details-card-heading">
              <div className="details-profile flex-r-sb poppins">
                <div className="flex">
                  <div className="details-profile-img">
                    <img src={StudentProfilePhoto} alt="StudentProfilePhoto" />
                  </div>
                  <div className="details-profile-user flex-col">
                    <span className="details-profile-username">
                      mohd kashif
                    </span>
                    <span>zone: east zone</span>
                    <span>centre: noor masjid centre</span>
                  </div>
                </div>
                <div className="details-profile-id flex-col">
                  <div>
                    <span>ID: 23152523335</span>
                  </div>
                  <div className="details-profile-icons">
                    <div>
                      <EditPencil />
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details-card-data">
              <StudentDetailsCardData />
            </div>
          </div>

          {/* Current Attendance Performance */}
          <div className="current-attendance-performance">
            <div className="current-attendance-performance-heading poppins">
              <span>current attendance performance</span>
            </div>
            <div className="current-attendance-performance-card">
              <div className="current-attendance-performance-chart">
              </div>

              <div className="cap-pla flex-r-sa">
                <div className="current-attendance-performance-present">
                  <div className="cap-present-icon">
                    <CAPpresent />
                  </div>
                  <div className="cap-present-title">
                    <span>70% present</span>
                  </div>
                </div>

                <div className="current-attendance-performance-leave">
                  <div className="cap-leave-icon">
                    <CAPleave />
                  </div>
                  <div className="cap-leave-title">
                    <span>10% leave</span>
                  </div>
                </div>

                <div className="current-attendance-performance-absent">
                  <div className="cap-absent-icon">
                    <CAPabsent />
                  </div>
                  <div className="cap-absent-title">
                    <span>20% absent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default StudentDetails;
