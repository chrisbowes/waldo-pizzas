import React from 'react';
import Loader from '../loader/app.component.loader';
import ListItem from '../listItem/app.component.list-item';


export default class SelectOrder extends React.Component {
    componentWillMount() {
        this.props.fetchOptions();
    }
    componentWillUpdate(nextProps) {
        if ( this.props.cartTotal < nextProps.cartTotal ) {
            this.props.history.push(`ReviewOrder`);
        }
    }
    render() {
        const isLoading = this.props.isLoading;
        const pizzaMenu = this.props.data && this.props.data.pizzaSizes;
        return (
            <div className="">
                <h2>Select Order</h2>
                { isLoading ?
                    <Loader />
                    :
                    <div>
                        { pizzaMenu && pizzaMenu.map( ( item, index ) => {
                            return (
                                <ListItem
                                    key={ index }
                                    item={ item } 
                                    itemIndex={ index } 
                                    cartView={ false }
                                    selectItem={ () => { this.props.selectItem( pizzaMenu, index ) } } />
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}