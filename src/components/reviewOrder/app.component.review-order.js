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
                { isLoading ?
                    <Loader />
                    :
                    <div>
                        { cartItems && cartItems.map( ( item, index ) => {
                            return (
                                <ListItem 
                                    item={ item } 
                                    itemIndex={ index } 
                                    cartView={ true }
                                    toggleSelectOption={ () => { console.log('select option') } }
                                    removeItemFromCart={ () => { console.log('remove item') } } />
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}