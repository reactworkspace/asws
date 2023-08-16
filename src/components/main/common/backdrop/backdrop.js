// Backdrop.js
import React from "react";
import PropTypes from 'prop-types';

import style from './backdrop.module.css';

// The Backdrop functional component represents a semi-transparent background used for modal popups or side drawers.
// It appears when `props.show` is true and calls `props.close` when clicked.
const Backdrop = props => (
    // If `props.show` is true, render a div with the backdrop container style that covers the entire screen.
    // The backdrop will be semi-transparent and will call `props.close` when clicked.
    props.show ? <div className={style.backDrop_container} onClick={props.close}></div> : null
);

// Prop types definition for the Backdrop component
Backdrop.propTypes = {
    show: PropTypes.bool // Indicates whether the backdrop should be visible or not (true or false)
};

export default Backdrop;
