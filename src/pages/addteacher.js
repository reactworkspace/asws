// CSS
import '../styles/index.css';
import '../styles/addteacher.css';
import '../styles/font.css';
import '../styles/flex.css';

import * as React from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';

const AddTeacher = () => {
  return (
    <section id="addteacher">
      <div>
        <div className="addteacher-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              Teacher <span className="poppins ">{'>'} add teacher</span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div>
          {/* personal details */}
          <div className="personal-details-div">
            <div className="personal-details">
              <div className="personal-details-heading poppins">
                <span>personal details</span>
              </div>
              <div id="personal-details-grid">
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    first name *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Ahmed"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    last name *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Qureshi"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    email *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Ahmedqureshi@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    phone *
                  </label>
                  <input
                    type="number"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="+91 987654321"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    address *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins teacher-personal-form-address"
                    id="teacher-personal-details-input"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    photo *
                  </label>
                  <div className="teacher-photo-box">
                    <span>drang and drop or</span>
                    <span>click here to select file</span>
                  </div>
                </div>

                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    date of birth *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="24 July 1997"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    aadhar no *
                  </label>
                  <input
                    type="number"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="0042 5651 2238"
                    required
                  />
                </div>
                <div>
                  <label className="teacher-personal-form-label" htmlFor="">
                    place of birth *
                  </label>
                  <input
                    type="text"
                    className="teacher-personal-form-input poppins"
                    id="teacher-personal-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="education-details-div"></div>
          <div className="education-details">
            <div className="education-details-heading poppins">
              <span>education</span>
            </div>
            <div id="education-details-grid">
              <div>
                <label className="teacher-education-form-label" htmlFor="">
                  university *
                </label>
                <input
                  type="text"
                  className="teacher-education-form-input poppins"
                  id="teacher-education-details-input"
                  placeholder="Osmania University"
                  required
                />
              </div>
              <div>
                <label className="teacher-education-form-label" htmlFor="">
                  degree *
                </label>
                <input
                  type="text"
                  className="teacher-education-form-input poppins"
                  id="teacher-education-details-input"
                  placeholder="History Major"
                  required
                />
              </div>
              <div>
                <label className="teacher-education-form-label" htmlFor="">
                  start & end data *
                </label>
                <div id="start-end-date-id">
                  <input
                    type="text"
                    className="teacher-education-form-input poppins"
                    id="teacher-education-details-input"
                    placeholder="September 2013"
                    required
                  />
                  <input
                    type="text"
                    className="teacher-education-form-input poppins"
                    id="teacher-education-details-input"
                    placeholder="September 2017"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="teacher-education-form-label" htmlFor="">
                  city *
                </label>
                <input
                  type="text"
                  className="teacher-education-form-input poppins"
                  id="teacher-education-details-input"
                  placeholder="Hyderabad"
                  required
                />
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="teacher-submit-button-div">
            <div className="teacher-submit-button">
              <span>submit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTeacher;
