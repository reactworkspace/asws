import React from 'react';

// style
import style from './buttons.module.css';

// React Router Dom
import { Link } from 'react-router-dom';

// import react icons
import { BsChevronDown, BsArrowRightShort } from 'react-icons/bs';

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

// Secondary Button
export const SecondaryButton = (props) => {
  const { title, address } = props;

  return (
    <div>
      <Link to={address}>
        <div className={style.btn_secondary_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
};

// Teritairy Button
export const TertiaryButton = (props) => {
  const {title, address} = props;
  return (
    <div>
      <Link to={address}>
        <div className={style.btn_teritairy_container}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}

export const CirclePrimaryButton = (props) =>{
  const { address } = props;
  return (
    <div>
      <Link to={address}>
        <div className={style.btn_circle_primary_container}>
          <BsArrowRightShort />
        </div>
      </Link>
    </div>
  );
}

