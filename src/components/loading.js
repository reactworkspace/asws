import '../styles/loading.css';

import React from 'react';

// Logo / Image as SVG
import { ReactComponent as AswsLogo } from '../assets/svg/aswslogoLoading.svg';

export const Loading = () => {
  return (
    <>
      <section className="loading-container">
        <AswsLogo className='asws-logo'/>
      </section>
    </>
  );
};

export default Loading;
