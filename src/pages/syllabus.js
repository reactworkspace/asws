// CSS
import '../styles/index.css';
import '../styles/syllabus.css';
import '../styles/font.css';
import '../styles/flex.css';

// Import user profile components
import UserProfile from '../components/userprofile';

// Import Components
import { PrimaryButton } from '../components/buttons';

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
        <div className="syllabus-container">
          <div className="syllabus-heading flex-r-sb">
            <div>
              <span className="poppins-sub-heading">all subjects</span>
            </div>
            <div><PrimaryButton title='add subject' >Hello</PrimaryButton></div>
          </div>
          <div className="syllabus-subject-list-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
