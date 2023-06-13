// CSS
import '../styles/index.css';
import '../styles/addzone.css';
import '../styles/font.css';
import '../styles/flex.css';
import '../styles/userprofile.css';

import * as React from 'react';

// Import user profile components
import UserProfile from '../components/userprofile';

const AddZone = () => {
  return (
    <section id="addzone">
      <div>
        <div className="addzone-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              centre <span className="poppins ">{'>'} create centre</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="zone-information">
          <div className="zone-information-heading">
            <span>zone information</span>
          </div>

          <div className="zone-information-form poppin">
            <div>
              <label className="zone-form-label" htmlFor="centrename">
                centre name *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-name-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="masjidcommitemember">
                masjid commitee member name *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="masjid-committe-member-name"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="email">
                eamil *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-email-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="email">
                phone *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-phone-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="address">
                address *
              </label>
              <input
                type="text"
                className="zone-form-input zone-form-input-address poppin"
                id="centre-address-input"
                placeholder=" "
                required
              />
            </div>
            <div>
              <label className="zone-form-label" htmlFor="waqboardno">
                waqt board no *
              </label>
              <input
                type="text"
                className="zone-form-input poppin"
                id="centre-waqt-board-no"
                placeholder=" "
                required
              />
            </div>
          </div>
        </div>

        {/* photo collection */}
        <div id="zone-photo-collection">
          <div className="zone-photo-collection-heading poppins">
            <span>photo collections *</span>
          </div>
          <div className="photo-card-collection-card">
            <span>drag and drop or</span>
            <span>click here to select file</span>
          </div>
        </div>
        <div className='zone-submit-button-div'>
          <div className='zone-submit-button'>
            <span>submit</span>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default AddZone;
