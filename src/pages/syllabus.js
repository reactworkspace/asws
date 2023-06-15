// CSS
import '../styles/index.css';
import '../styles/syllabus.css';
import '../styles/font.css';
import '../styles/flex.css';

// Import user profile components
import UserProfile from '../components/userprofile';

const Syllabus = () => {
  return (
    <section id="syllabus">
      <div>
        <div className="syllabus-heading flex-r-sb">
          <div>
            <span className="poppins-heading">syllabus</span>
          </div>
          <UserProfile />
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
