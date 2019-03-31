import React from 'react';
import Loader from '../loader';


export default class SelectOrder extends React.Component {
    componentWillMount() {
        this.props.fetchOptions();
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
                        { pizzaMenu && pizzaMenu.map( ( pizza, index ) => {
                            return (
                                <div key={ index }>
                                    <h3>{ pizza.name } <button onClick={ () => this.props.selectItem( pizza ) }>Choose and customize</button></h3>
                                    { pizza.toppings.map( ( item, index ) =>
                                        <div key={ index }>
                                            <span>{ item.topping.name }</span>
                                            <span>{ item.topping.price }</span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}