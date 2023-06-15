// CSS
import '../styles/index.css';
import '../styles/style.css';
import '../styles/zone.css';
import '../styles/font.css';
import '../styles/flex.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

// react icons
import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';
import { BsCaretUpFill } from 'react-icons/bs';

// Import zone card
import ZoneCard from '../components/zonecard';

const SearchZone = () => {
  return (
    <div className="search-centre-div">
      <input type="text" id="search-centre" placeholder="Search here.." />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

const NewCentreButton = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="new-zone-btn-div">
      <button
        className="new-zone-btn Montserrat flex-c"
        onClick={toggleContent}
      >
        <TiPlus />
        <span>new zone</span>
      </button>
      {showContent && (
        <div className="new-zone-btn-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to="/addzone">add centre</Link>
            <Link to="/importzone">import centre</Link>
          </div>
        </div>
      )}
    </div>
  );
};

const ZoneCheckButtons = () => {
  return (
    <div id="zone-check-buttons">
      <label className="zone-checkbox-lable flex-c poppins">
        <input type="checkbox" />
        <span>east zone</span>
      </label>

      <label className="zone-checkbox-lable flex-c poppins">
        <input type="checkbox" />
        <span>west zone</span>
      </label>

      <label className="zone-checkbox-lable flex-c poppins">
        <input type="checkbox" />
        <span>north zone</span>
      </label>

      <label className="zone-checkbox-lable flex-c poppins">
        <input type="checkbox" />
        <span>south zone</span>
      </label>

      <label className="zone-checkbox-lable flex-c poppins">
        <input type="checkbox" />
        <span>central zone</span>
      </label>
    </div>
  );
};

const Zone = () => {
  return (
    <section id="page">
      <div>
        <div className="page-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              zone <span className="poppins"> {'>'} Centres</span>
            </span>
          </div>
          <UserProfile />
        </div>
        <div className="zone-search-btn flex-r-sb">
          <SearchZone />
          <NewCentreButton />
        </div>
        <div className="select-zone">
          <div className="select-zone-heading">
            <span className="poppins">select zone</span>
          </div>
          <ZoneCheckButtons />
        </div>
        <div id="zone-card-list" className="flex">
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
          <ZoneCard />
        </div>
      </div>
    </section>
  );
};

export default Zone;
