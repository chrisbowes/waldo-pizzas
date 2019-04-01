export const addToCartRequest = ( item ) => {
    return ( dispatch ) => {
        dispatch({
            type: 'ADD_TO_CART_REQUEST'
        })
        // Add selected property to each topping
        for ( let option of item.toppings ) {
            if ( option.defaultSelected ) {
                option.selected = true;
            } else {
                option.selected = false;
            }
        }
        dispatch(
            addToCartSuccess( item )
        );
    }
}

export const addToCartSuccess = ( item, message ) => {
    return {
        type: 'ADD_TO_CART_SUCCESS',
        item: item,
        message: message,
        receivedAt: Date.now
    }
}