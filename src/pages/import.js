// CSS
import '../styles/index.css';
import '../styles/import.css';
import '../styles/font.css';
import '../styles/flex.css';

import { Link } from 'react-router-dom';

// Import user profile components
import UserProfile from '../components/userprofile';

// Import SVG
import { ReactComponent as FileIcon } from '../assets/svg/file_document_icon.svg';

// Import Zone Page Component

export const ImportZone = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/zone">centre</Link>
              {' > '} <span className="poppins"> import centre</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="upload-heading poppins">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>
          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Teacher Page Component

export const ImportTeacher = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/teacher">teacher</Link>
              {' > '}
              <span className="poppins"> import teacher</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="upload-heading poppins">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>
          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Zone Page Component
export const ImportStudent = () => {
  return (
    <section id="import">
      <div>
        <div className="import-heading flex-r-sb">
          <div>
            <span className="poppins-heading">
              <Link to="/student">student</Link>
              {' > '} <span className="poppins"> import student</span>
            </span>
          </div>
          <UserProfile />
        </div>

        <div id="upload">
          <div>
            <span className="upload-heading poppins">upload your files</span>
          </div>
          <div className="upload-card">
            <div className="poppins">
              <div className="center">
                <FileIcon />
              </div>
              <span>Drag and drop or choose a file</span>
              <span>.Csv file type is suported</span>
            </div>
          </div>
          <div className="download-template-file">
            <span className="poppins">download template file</span>
          </div>
        </div>
      </div>
    </section>
  );
};
