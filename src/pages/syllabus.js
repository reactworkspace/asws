// CSS
import '../styles/index.css';
import '../styles/syllabus.css';
import '../styles/font.css';
import '../styles/flex.css';
import '../styles/color.css';

// Import user profile components
import UserProfile from '../components/userprofile';

// Import Components
import { PrimaryButton } from '../components/buttons';

// Import SVG Icon Componenets
import { ReactComponent as CircleArrow } from '../assets/svg/circle-arrow.svg';

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
            <div>
              <PrimaryButton title="add subject" address='/addsubject' />
            </div>
          </div>
          <div className="syllabus-subject-list-container flex-col gap2rem">

            <div className="syllabus-subject-list flex-r-sb">
              <div className="flex gap2rem">
                <div className="syllabus-subject-box flex-c">
                  <span className="poppins-heading color-white">1</span>
                </div>
                <div>
                  <span className="poppins-heading-2rem-600">surah</span>
                </div>
              </div>
             <CircleArrow className='circle-arrow-icon' />
            </div>

            <div className="syllabus-subject-list flex-r-sb">
              <div className="flex gap2rem">
                <div className="syllabus-subject-box flex-c">
                  <span className="poppins-heading color-white">2</span>
                </div>
                <div>
                  <span className="poppins-heading-2rem-600">ahadees</span>
                </div>
              </div>
              <CircleArrow className='circle-arrow-icon' />
            </div>

            <div className="syllabus-subject-list flex-r-sb">
              <div className="flex gap2rem">
                <div className="syllabus-subject-box flex-c">
                  <span className="poppins-heading color-white">3</span>
                </div>
                <div>
                  <span className="poppins-heading-2rem-600">dua</span>
                </div>
              </div>
              <CircleArrow className='circle-arrow-icon' />
            </div>

            <div className="syllabus-subject-list flex-r-sb">
              <div className="flex gap2rem">
                <div className="syllabus-subject-box flex-c">
                  <span className="poppins-heading color-white">4</span>
                </div>
                <div>
                  <span className="poppins-heading-2rem-600">azkaar e namaz</span>
                </div>
              </div>
              <CircleArrow className='circle-arrow-icon' />
            </div>

            <div className="syllabus-subject-list flex-r-sb">
              <div className="flex gap2rem">
                <div className="syllabus-subject-box flex-c">
                  <span className="poppins-heading color-white">5</span>
                </div>
                <div>
                  <span className="poppins-heading-2rem-600">kalima</span>
                </div>
              </div>
              <CircleArrow className='circle-arrow-icon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;