import style from './withLoader.module.css';

import React from 'react';

// Logo / Image as SVG
import { ReactComponent as AswsLogo } from '../../assets/svg/aswslogoLoading.svg';

const WithLoader = () => {
  return (
    <>
      <section className={style.loading_container}>
        <AswsLogo className={style.asws_logo} />
      </section>
    </>
  );
};

export default WithLoader;
