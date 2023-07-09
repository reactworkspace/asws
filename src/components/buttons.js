// React & React Hooks
import React, { useState } from 'react';

// React Router Dom
import { Link } from 'react-router-dom';

// react icons
// import { FaFilter } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { BsCaretUpFill } from 'react-icons/bs';

//
import '../styles/buttons.css';
// common button1
export const PrimaryButton = (props) => {
  const {
    title,
    address1,
    address2,
    address3,
    addressTitle1,
    addressTitle2,
    addressTitle3,
  } = props;

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="btn-primary-div">
      <button className="btn-primary Montserrat flex-c" onClick={toggleContent}>
        <TiPlus />
        <span>{title}</span>
      </button>
      {showContent && (
        <div className="btn-primary-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to={address1}>{addressTitle1}</Link>
            <Link to={address2}>{addressTitle2}</Link>
            <Link to={address3}>{addressTitle3}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

// PrimaryNewButton for zone, student, teacher 
export const PrimaryNewButton = (props) => {
  const {
    title,
    address1,
    address2,
    addressTitle1,
    addressTitle2,
  } = props;

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="btn-primary-div">
      <button className="btn-primary Montserrat flex-c" onClick={toggleContent}>
        <TiPlus />
        <span>{title}</span>
      </button>
      {showContent && (
        <div className="btn-primary-content Montserrat">
          <div className="flex-r-sb" onClick={toggleContent}>
            <span>Select</span>
            <BsCaretUpFill />
          </div>
          <div className="flex-col">
            <Link to={address1}>{addressTitle1}</Link>
            <Link to={address2}>{addressTitle2}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

