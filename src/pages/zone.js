// CSS
import '../styles/index.css';
import '../styles/zone.css';
import '../styles/font.css';
import '../styles/flex.css';



// Import user profile components
import UserProfile from '../components/userprofile';



import { TiPlus } from 'react-icons/ti';
import { HiOutlineSearch } from 'react-icons/hi';



const SearchZone = () => {
  return (
    <div className="search-centre-div">
      <input type="text" id="search-centre" placeholder="Search here.." />
      <HiOutlineSearch className="search-centre-icon" />
    </div>
  );
};

const NewCentreButton = () => {
  return (
    <button className="new-btn Montserrat flex-c">
          <TiPlus />
          <span>New</span>
        </button>
  );
}

const Zone = () => {
  return (
    <section id="zone">
		<div>
    <div className="zone-heading flex-r-sb">
		  <div>
			<span className="poppins-heading">
			zone <span className="poppins "> {'>'} Centre</span>
			</span>
		  </div>
		  <UserProfile />
		</div>
    <div className='zone-search-btn flex-r-sb'>
    <SearchZone />
    <NewCentreButton />
    </div>
    </div>
    
	  </section>
  );
};

export default Zone;
