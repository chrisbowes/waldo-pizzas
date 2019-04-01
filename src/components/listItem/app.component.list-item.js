
import React from 'react';
import PropTypes from 'prop-types';
import itemTotal from '../../helpers/app.helper.item-total';

const ListItem = (props) => {
    return (
        <div>
            <h3>{ props.item.name }
                { props.cartView ?
                    <button onClick={() => props.removeItemFromCart( props.item )}>Remove</button>
                    :
                    <button onClick={() => props.selectItem( props.item )}>Choose and customize</button>
                }
                <span>
                    { props.cartView ? 
                        <span>{ itemTotal( props.item )}</span>
                        :
                        <span>{ props.item.basePrice }</span>
                    }
                </span>
            </h3>
            { props.item.toppings.map( ( option, optionIndex ) =>
                <div key={ optionIndex }>
                    { props.cartView ?
                        <label>
                            <input type='checkbox' defaultChecked={option.selected} onChange={() => props.toggleSelectOption( props.itemIndex, optionIndex )} />
                            <span>{ option.topping.name }</span>
                            <span>{ option.topping.price }</span>
                        </label>
                        :
                        <span>
                            <span>{ option.topping.name }</span>
                            <span>{ option.topping.price }</span>
                        </span>
                    }

                </div>
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
    removeItemFromCart: PropTypes.func
}

export default ListItem;
