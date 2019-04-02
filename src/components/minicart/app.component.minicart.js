import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MiniCart = (props) => {
    return (
        <span className="waldo-ui-minicart"> 
            <span className="waldo-ui-minicart__total">{ props.totalItems }</span>
            <span className="waldo-ui-minicart__price">${ props.totalPrice }</span>
        </span>
    )
}

MiniCart.propTypes = {
    totalItems: PropTypes.number,
    totalCost: PropTypes.number
}

export default MiniCart;