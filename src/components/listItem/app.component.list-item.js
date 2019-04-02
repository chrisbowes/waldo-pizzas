
import React from 'react';
import PropTypes from 'prop-types';
import itemTotal from '../../helpers/app.helper.item-total';

const ListItem = (props) => {
    const maxOptions = props.item.maxToppings;
    const selectedOptionsCount = props.item.toppings.filter((option) => option.selected).length;
    const maxOptionsSelected = selectedOptionsCount === maxOptions;
    return (
        <div>
            <h3>{ props.item.name }
                { props.cartView ?
                    <span>
                        <span>${ itemTotal( props.item ) }</span>
                        <button onClick={ props.removeItem }>Remove</button>
                    </span>
                    :
                    <span>
                        <span>${ props.item.basePrice }</span>
                        <button onClick={ props.selectItem }>Choose and customize</button>
                    </span>
                }
            </h3>
            { props.cartView &&
                <div>
                    { maxOptions ?
                        <><strong>{ selectedOptionsCount }</strong> of <strong>{ maxOptions }</strong> available options chosen</>
                        :
                        <><strong>{ selectedOptionsCount }</strong> chosen</>
                    }
                    
                </div>
            }
            { props.item.toppings.map( ( option, optionIndex ) => {
                const disabled = maxOptionsSelected && !props.item.toppings[ optionIndex ].selected;
                return (
                    <div key={optionIndex}>
                        {props.cartView ?
                            <label>
                                <input
                                    type='checkbox'
                                    disabled={ disabled }
                                    defaultChecked={ option.selected }
                                    onChange={ () => props.toggleSelectOption( props.itemIndex, props.item, optionIndex ) }
                                />
                                <span>{ option.topping.name }</span>
                                <span>${ option.topping.price }</span>
                            </label>
                            :
                            <div>
                                <span>{ option.topping.name }</span>
                                <span>${ option.topping.price }</span>
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
