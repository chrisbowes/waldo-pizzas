import React from 'react';
import PropTypes from 'prop-types';

const MiniCart = (props) => {
    return (
        <span>
            <span>{ props.totalItems }</span>
            <span>${ props.totalPrice }</span>
        </span>
    )
}

MiniCart.propTypes = {
    totalItems: PropTypes.number,
    totalCost: PropTypes.number
}

export default MiniCart;