// CSS file
import style from './homepage.module.css';

// React & React Hooks
import React, { useState, useEffect } from 'react';

// React Router
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import Animation On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  SignupPageComponent,
  SigninPageComponent,
  ForgotPageComponenet,
} from '../signin/signin';

// Importing the dasboard
import AswsIndex from '../index';

// Importing the Components
import WithLoader from '../../HOC/withLoader/WithLoader';

// importing Buttons
import {
  SigninButton,
  PrimaryButton,
  PlayButton,
} from '../../components/homepage/buttons/buttons';

// import svg as react component
import { ReactComponent as PlayIcon } from '../../assets/svg/homepage/play_icon.svg';

// import section componenets
import {
  Title,
  Content,
  List,
  ListItem,
  ProjectCard,
  Statistics,
  Chart,
  DonationCard,
  EventTitle,
  EventCard,
} from '../../components/homepage/section/section';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an artificial delay of 2 seconds (2000 milliseconds)
    const delay = 1000;

    setTimeout(() => {
      // Check if the user is logged in (e.g., retrieve data from sessionStorage)
      const isLoggedInSessionStorage = sessionStorage.getItem('isLoggedIn');
      if (isLoggedInSessionStorage !== null) {
        setIsLoggedIn(isLoggedInSessionStorage === 'true');
        setIsLoading(false); // Mark loading as completed
      } else {
        // Check if the user is logged in (e.g., retrieve data from localStorage)
        const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(isLoggedInLocalStorage === 'true');
        setIsLoading(false); // Mark loading as completed

        // If not found in sessionStorage, store the value in sessionStorage for future reference in this session
        sessionStorage.setItem('isLoggedIn', isLoggedInLocalStorage);
      }
    }, delay);
  }, []);

  if (isLoading) {
    // Show a loading page or spinner while the status is being checked
    return <WithLoader />;
  }

  return (
    <>
      {isLoggedIn ? (
        <AswsIndex />
      ) : (
        <section>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePageComponent />} />
              <Route exact path="/signin" element={<SigninPageComponent />} />
              <Route exact path="/signup" element={<SignupPageComponent />} />
              <Route exact path="/forgot" element={<ForgotPageComponenet />} />
            </Routes>
          </Router>
        </section>
      )}
    </>
  );
};

export default HomePage;

const HomePageComponent = () => {
  // useEffect to Fade the Element in Section
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* header */}
      <section class={style.header_container}>
        <div className={style.header_logo}>
          <h1>
            <span className={style.righteous}>ahle sunnat welfare society</span>
          </h1>
        </div>

        <div className={style.nav_container}>
          <div>
            <h1>
              {' '}
              <Link to="#home">
                <span className={style.nav_font}>home</span>
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              {' '}
              <Link to="#aboutus">
                <span className={style.nav_font}>about us</span>
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="#home">
                <span className={style.nav_font}>what we do</span>
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="#home">
                <span className={style.nav_font}>media</span>
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="#home">
                <span className={style.nav_font}>contact</span>
              </Link>
            </h1>
          </div>
        </div>

        <div className={style.sigin_container}>
          <SigninButton title="sign in" address="/signin" />
        </div>
      </section>

      {/* main */}
      <main className={style.main_container}>
        {/* Home Section */}
        <section id="home" className={style.home_container}>
          <div className={style.home_wrapper}>
            <div>
              <div className={style.home_heading_wrapper}>
                <span>
                  100 days <br />
                  islmaic foundational program (IFP)
                </span>
              </div>
              <div className={style.home_buttons_wrapper}>
                <PrimaryButton title="what we do" />
                <PlayButton title="play video" />
              </div>
            </div>
            <div className={style.home_paragraph_wrapper}>
              <div>
                <span>500 children completed IFP Program</span>
              </div>
              <div className={style.home_line}></div>
              <div>
                <span>58 donations collected</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="aboutus" className={style.aboutus_container}>
          <div className={style.aboutis_wrapper} data-aos="fade-up">
            <div className={style.aboutus_top_container}>
              <div className={style.aboutus_left_wrapper}>
                <Title title="about us" />
                <Content>
                  <div>
                    <h2>
                      From Quran to Society: <br />
                      Empowering for Harmony
                    </h2>
                  </div>
                  <div className={style.aboutus_left_content_paragraph_wrapper}>
                    <p>
                      <span>
                        We Ahle Sunnath Welfare society believe that these
                        issues can be treated well with the right education in
                        place and hence the idea of 100 days of islamic
                        foundation program (IFP) evolved. <br />
                        <br />
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.
                      </span>
                    </p>
                  </div>
                  <div className={style.aboutus_button_wrapper}>
                    <PrimaryButton title="learn more" />
                  </div>
                </Content>
              </div>

              <div className={style.aboutus_right_wrapper}>
                <div className={style.aboutus_right_video_container}>
                  <PlayIcon className={style.aboutus_play_icon} />
                </div>
              </div>
            </div>

            <div className={style.aboutus_bottom_container}></div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          id={style.whatwedoContainer}
          className={style.whatwedo_container}
        >
          <div className={style.whatwedo_wrapper} data-aos="fade-up">
            <div className={style.whatwedo_left_wrapper}>
              <Title title="what we do" />
              <Content>
                <div>
                  <h2>What we do at 100 days IFP?</h2>
                </div>
                <div className={style.whatwedo_left_content_paragraph_wrapper}>
                  <p>
                    <span>
                      With this program, we are teaching the basic of Islam and
                      inculcating a culture of discipling by encouraging them
                      with Memorizing and Practicing
                    </span>
                  </p>
                </div>
                <List>
                  <ListItem
                    title="Namaz-e-Fajr"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros."
                  />

                  <ListItem
                    title="Azkar-e-Namaz"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros."
                  />

                  <ListItem
                    title="Quran With Tajwid"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros."
                  />

                  <ListItem
                    title="20 Surah"
                    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros."
                  />
                </List>
              </Content>
            </div>
            <div className={style.whatwedo_right_wrapper}>
              <div className={style.whatwedo_right_image_container}></div>
            </div>
          </div>
        </section>

        {/* Projects We Have Done Section */}
        <section className={style.projectswehavedone_container}>
          <div className={style.projectswehavedone_wrapper} data-aos="fade-up">
            <div className={style.projectswehavedone_top_wrapper}>
              <Title title="project we have done" />
              <Content>
                <div>
                  <h2>
                    Alhumdulilah, 3 (100 days) IFP in Hyderabad in a year!"
                  </h2>
                </div>
              </Content>
            </div>
            <div className={style.projectswehavedone_bottom_wrapper}>
              <div className={style.projectwehavedone_card_1}>
                <ProjectCard
                  cardHeading="Mission smile 1k: Outdoor charity"
                  cardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  btnTitle="learn more"
                />
              </div>
              <div className={style.projectwehavedone_card_2}>
                <ProjectCard
                  cardHeading="Weekly excursions"
                  cardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  btnTitle="learn more"
                />
              </div>
              <div className={style.projectwehavedone_card_3}>
                <ProjectCard
                  cardHeading="Monthly public awareness"
                  cardParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  btnTitle="learn more"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className={style.data_container}>
          <div className={style.data_wrapper}>
            <div className={style.data_left_container} data-aos="fade-up">
              <div className={style.data_heading}>
                <h2>
                  How we spend your <br />
                  donations and where it goes
                </h2>
              </div>
              <div className={style.data_paragraph}>
                <p>
                  We understand that when you make a donation, you want to know
                  exactly where your money is going and we pledge to be
                  transparent.
                </p>
              </div>
              <div className={style.data_statistic_container}>
                <Statistics
                  percentage1="40"
                  percentage2="35"
                  percentage3="10"
                  percentage4="10"
                  percentage5="5"
                  dataLabel1="IFP Program"
                  dataLabel2="new ISP centre"
                  dataLabel3="helping people"
                  dataLabel4="excursions"
                  dataLabel5="feeding the poor"
                />
              </div>
            </div>
            <div className={style.data_right_container}>
              <Chart />
            </div>
          </div>
        </section>
      </main>

      {/* Donation Section */}
      <section className={style.donation_container}>
        <div className={style.donation_wrapper} data-aos="fade-up">
          <DonationCard
            heading='"Empower Positive Change: Extend a Helping Hand through Your
          Generous Donations and Make a Lasting Difference"'
            btnTitle="donate now"
            btnAddress=""
          />
        </div>
      </section>

      {/* Our Event Section */}
      <section className={style.event_container}>
        <div className={style.event_wrapper}>
          <div data-aos="fade-right">
            <EventTitle title="our events" />
          </div>
          <div className={style.event_cards_container} data-aos="fade-up">
            <EventCard
              eventDay="13"
              eventMonth="aug"
              eventDetail="next event"
              eventHeading="Next IFP program will start in another city, Kurnool."
            />
            <EventCard
              eventDay="25"
              eventMonth="sep"
              eventDetail="next event"
              eventHeading='"100-Day IFB Achiever: Celebrate with a Special Gift!
              '
            />
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section className={style.footer_container}>
        <div className={style.footer_wrapper}>
          
        </div>
      </section>
    </div>
  );
};
