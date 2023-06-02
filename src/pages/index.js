import styles from '../styles/asws.module.css';
import Dashboard from './dashboard';
import Zone from './zone';

const AswsIndex = () => {
  return (
    <>
      <header className="headerSection">
        <div></div>
      </header>
      <nav className="navbar">
        <div className="logo">
          <figure>{/* <img src="" alt="" /> */}</figure>
        </div>
        <div>
          <div> logo</div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>zone</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>student</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>teacher</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>attendance</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>syllabus</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Logo</span>
                  <span>setting</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section className="main-section">
          <Dashboard />
          <Zone />
        </section>
      </main>
    </>
  );
};

export default AswsIndex;
