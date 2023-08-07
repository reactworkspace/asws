import React from 'react';

// style
import style from './buttons.module.css';

// React Router Dom
import { Link } from 'react-router-dom';

// import react icons
import { BsChevronDown } from 'react-icons/bs';

// import svg as react component
import { ReactComponent as PlayIcon } from '../../../assets/svg/homepage/play_icon.svg';

export const SigninButton = (props) => {
  const { title, address } = props;

  return (
    <div>
      <Link to={address}>
        <div className={style.btn_signin_container}>
          <div>
            <span>{title}</span>
          </div>
          <div>
            <span className={style.btn_signin_wrapper}>
              <BsChevronDown />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Play Button

export const PlayButton = (props) => {
  const { title, address } = props;
  return (
    <div>
      <Link to={address}>
        <div className={style.btn_play_container}>
          <div>
            <PlayIcon />
          </div>
          <div>
            <span>{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Primary Button
export const PrimaryButton = (props) => {
  const { title, address } = props;

  return (
    <div>
      <Link to={address}>
        <div className={style.btn_primary_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};
