import React from 'react';
import './style.css';
import Bismilla from '../../../assets/images/bismillah.png';
import AswsLogo from '../../../assets/images/asws_logo.png';
import style from './curtain.module.css';

export const Curtain = () => {
  const showTime = () => {
    const curtain = document.getElementById('curtain');
    curtain.className = 'open';

    const scene = document.getElementById('scene');
    scene.className = 'expand';

    const starter = document.getElementById('starter');
    starter.className = 'fade-out';

    setTimeout(() => {
      starter.style.display = 'none';
    }, 2000);

    setTimeout(() => {
      window.location.replace('#/homepage'); // Navigate to the homepage and replace the current history entry
    }, 5000);
  };

  return (
    <div className={style.curtain_container}>
      {' '}
      <div>
        <div id="starter">
          <div className={style.button_container} onClick={showTime} >
            <img src={Bismilla} alt="" />
          </div>
        </div>
        <div id="scene">
          <div id="curtain">
            <div className="left"></div>
            <div className="right"></div>
            <h1>
              <img src={AswsLogo} alt="" className={style.asws_logo} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

