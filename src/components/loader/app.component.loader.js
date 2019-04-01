import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
    return (
        <div>
            <div>
                <svg
                    width={props.spinnerWidth ? props.spinnerWidth : "8rem"}
                    height={props.spinnerHeight ? props.spinnerHeight : "8rem"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    className="lds-rolling">
                    <circle cx="50" cy="50" fill="none" stroke="#00bbff" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(100.019 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    </circle>
                </svg>
                {props.text &&
                    <div className="ciam-ui-spinner__text">{props.text}</div>
                }
            </div>
        </div>
    )
}

Loader.propTypes = {
    spinnerWidth: PropTypes.string,
    spinnerHeight: PropTypes.string,
    fullScreen: PropTypes.bool,
    text: PropTypes.string
}

export default Loader;