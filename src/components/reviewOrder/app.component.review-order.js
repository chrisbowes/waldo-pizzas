import React from 'react';
import Loader from '../loader/app.component.loader';
import ListItem from '../listItem/app.component.list-item';


export default class ReviewOrder extends React.Component {
    
    render() {
        const isLoading = this.props.isLoading;
        const cartItems = this.props.cart && this.props.cart;
        return (
            <div className="">
                <h2>Review Order</h2>
                { cartItems.length > 0 ?
                    <div>
                        { cartItems && cartItems.map( ( item, index ) => {
                            return (
                                <ListItem
                                    key={ index }
                                    item={ item } 
                                    itemIndex={ index } 
                                    cartView={ true }
                                    toggleSelectOption={ this.props.toggleOption }
                                    removeItem={ () => { this.props.removeItem( index ) } } />
                            )
                        })}
                    </div>
                    :
                    <div>You have no items in your order</div>
                }
            </div>
        )
    }
} 