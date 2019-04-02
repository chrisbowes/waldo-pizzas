
import React from 'react';
import PropTypes from 'prop-types';
import itemTotal from '../../helpers/app.helper.item-total';
import './index.css';

const ListItem = (props) => {
    const maxOptions = props.item.maxToppings;
    const selectedOptionsCount = props.item.toppings.filter((option) => option.selected).length;
    const maxOptionsSelected = selectedOptionsCount === maxOptions;
    return (
        <div className="waldo-ui-list-item">
            <h3 className="waldo-ui-list-item__header">
                <span>{props.item.name}</span>
                {props.cartView ?
                    <span className="waldo-ui-list-item__price-options">
                        <span className="waldo-ui-list-item__price">${itemTotal(props.item)}</span>
                        <button onClick={props.removeItem}>Remove</button>
                    </span>
                    :
                    <span className="waldo-ui-list-item__price-options">
                        <span className="waldo-ui-list-item__price">${props.item.basePrice}</span>
                        <button onClick={props.selectItem}>Choose and customize</button>
                    </span>
                }
            </h3>
            {props.cartView &&
                <div>
                    {maxOptions ?
                        <><strong>{selectedOptionsCount}</strong> of <strong>{maxOptions}</strong> available options chosen</>
                        :
                        <><strong>{selectedOptionsCount}</strong> chosen. Unlimited toppings</>
                    }

                </div>
            }
            {props.item.toppings.map((option, optionIndex) => {
                const disabled = maxOptionsSelected && !props.item.toppings[optionIndex].selected;
                return (
                    <div key={optionIndex}>
                        {props.cartView ?
                            <label className="waldo-ui-list-item__option">
                                <span>
                                    <input 
                                        type='checkbox'
                                        disabled={disabled}
                                        defaultChecked={option.selected}
                                        onChange={() => props.toggleSelectOption(props.itemIndex, props.item, optionIndex)}
                                    />

                                    <span className="waldo-ui-list-item__option-name">{option.topping.name}</span>
                                </span>
                                <span>${option.topping.price}</span>
                            </label>
                            :
                            <div className="waldo-ui-list-item__option">
                                <span className="waldo-ui-list-item__option-name">{option.topping.name}</span>
                                <span>${option.topping.price}</span>
                            </div>
                        }
                    </div>
                )
            }
            )}
        </div>
    )
}

ListItem.propTypes = {
    item: PropTypes.object,
    itemIndex: PropTypes.number,
    cartView: PropTypes.bool,
    toggleSelectOption: PropTypes.func,
    selectItem: PropTypes.func,
    removeItem: PropTypes.func
}

export default ListItem;
