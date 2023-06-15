// CSS
import '../styles/index.css';
import '../styles/setting.css';
import '../styles/font.css';
import '../styles/flex.css';

// Import user profile components
import UserProfile from '../components/userprofile';

const Setting = () => {
  return (
    <section id="setting">
      <div>
        <div className="setting-heading flex-r-sb">
          <div>
            <span className="poppins-heading">setting</span>
          </div>
          <UserProfile />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Setting;
