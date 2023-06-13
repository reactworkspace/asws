// CSS
import '../styles/index.css';
import '../styles/addstudent.css';
import '../styles/font.css';
import '../styles/flex.css';
import '../styles/userprofile.css';

import * as React from 'react';

// useState react hook
import { useState } from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';

// import react icons
import { TiPlus } from 'react-icons/ti';

const SiblingInformationForm = () => {
  const [showContent, setShowContent] = useState(false);

  const handleRadioChange = (e) => {
    if (e.target.value === 'yes') {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };

  const [selectedSibling, setSelectedSibling] = useState('');

  const handleRadioChangeSibling = (e) => {
    setSelectedSibling(e.target.value);
  };

  return (
    <div className="sibling-radio-container">
      <span className="poppins">Is your sibling studying here?</span>
      <div className="flex">
        <div>
          <input
            type="radio"
            name="siblingStudying"
            value="yes"
            id="yes"
            onChange={handleRadioChange}
          />
          <label htmlFor="yes">
            <span>yes</span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="siblingStudying"
            value="no"
            id="no"
            onChange={handleRadioChange}
          />
          <label htmlFor="no">
            <span>no</span>
          </label>
        </div>
      </div>

      {showContent && (
        <div className="sibling-content">
          <div>
            <div>
              <span className="poppins">Siblings</span>
              <div className="flex">
                <div>
                  <input
                    type="radio"
                    name="sibling"
                    value="sister"
                    id="sister"
                    className="poppins"
                    onChange={handleRadioChangeSibling}
                  />
                  <label htmlFor="sister">
                    <span>Sister</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sibling"
                    value="brother"
                    id="brother"
                    className="poppins"
                    onChange={handleRadioChangeSibling}
                  />
                  <label htmlFor="brother">
                    <span>Brother</span>
                  </label>
                </div>
              </div>
            </div>

            {selectedSibling === 'sister' && <SisterSibling />}
            {selectedSibling === 'brother' && <BrotherSibling />}
          </div>
        </div>
      )}
    </div>
  );
};

const SisterSibling = () => {
  return (
    <div id="sibling-details">
      <div>
        <label className="sibling-form-label" htmlFor="">
          name *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Afsha Fatima"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          age *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="08"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          standard *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="VI"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          school *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Crown Mission High School"
          required
        />
      </div>
      <div className="add-more-btn-sibling">
        <TiPlus />
        <span>add more</span>
      </div>
    </div>
  );
};

const BrotherSibling = () => {
  return (
    <div id="sibling-details">
      <div>
        <label className="sibling-form-label" htmlFor="">
          name *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Syed Ahmed"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          age *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="08"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          standard *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="VI"
          required
        />
      </div>

      <div>
        <label className="sibling-form-label" htmlFor="">
          school *
        </label>
        <input
          type="text"
          className="sibling-form-input poppin"
          id="student-details-input"
          placeholder="Crown Mission High School"
          required
        />
      </div>
      <div className="add-more-btn-sibling">
        <TiPlus />

        <span>add more</span>
      </div>
    </div>
  );
};

const AddStudent = () => {
  return (
    <section id="addstudent">
      <div>
        <div className="addstudent-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              student <span className="poppins">{'>'} add student</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="student-details">
          <div className="student-details-heading">
            <span>student details</span>
          </div>

          <div className="student-details-form poppins">
            <div className=""></div>

            <div id="student-details-grid">
              <div>
                <label className="student-form-label" htmlFor="">
                  select zone *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  select centre *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  first name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Syed"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  last name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Aleem"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  date & place of birth *
                </label>
                <div id="dob-place-div">
                  <input
                    type="text"
                    className="student-form-input poppins dob-place"
                    id="student-details-input"
                    placeholder="24 February 2005"
                    required
                  />
                  <input
                    type="text"
                    className="student-form-input dob-place poppins"
                    id="student-details-input"
                    placeholder="Hyderabad"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  school name *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="School Name"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  email *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="SyedAleem@gmail.com"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  phone *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="+91 123456789"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  address *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  city *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Hyderabad"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  pin *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="500002"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  state *
                </label>
                <input
                  type="text"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="Select State"
                  required
                />
              </div>

              <div>
                <label className="student-form-label" htmlFor="">
                  aadhaar no *
                </label>
                <input
                  type="number"
                  className="student-form-input poppins"
                  id="student-details-input"
                  placeholder="4456 4112 4452"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Student Sibling Information */}
        <div id="sibling-information">
          <div id="student-sibling-information">
            <div className="sibling-information-heading">
              <span>sibling details</span>
            </div>
            <div className="sibling-information-form-div">
              <SiblingInformationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
