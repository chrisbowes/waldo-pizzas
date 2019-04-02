export const addToCartRequest = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART_REQUEST'
        })
        item.id = Math.floor(1000 + Math.random() * 9000);
        // Add selected property to each topping
        for (let option of item.toppings) {
            if (option.defaultSelected) {
                option.selected = true;
            } else {
                option.selected = false;
            }
        }
        dispatch(
            addToCartSuccess(item)
        )
    }
}

export const addToCartSuccess = (item, message) => {
    return {
        type: 'ADD_TO_CART_SUCCESS',
        item: item,
        message: message,
        receivedAt: Date.now
    }
}

export const removeFromCartRequest = (index) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART_REQUEST'
        })
        dispatch(
            removeFromCartSuccess(index)
        );
    }
}

export const removeFromCartSuccess = (index) => {
    return {
        type: 'REMOVE_FROM_CART_SUCCESS',
        itemIndex: index,
        receivedAt: Date.now
    }
}

export const toggleOptionSelectionRequest = (itemIndex, item, optionIndex) => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_OPTION_SELECTION_REQUEST'
        })
        dispatch(
            toggleOptionSelection(itemIndex, item, optionIndex)
        );
    }
}

export const toggleOptionSelection = (itemIndex, item, optionIndex) => {
    return (dispatch) => {
        // Toggle the selected prop on the option
        const targetOption = item.toppings[optionIndex];
        targetOption.selected = !targetOption.selected;
        dispatch({
            type: 'TOGGLE_OPTION_SELECTION',
            options: item.toppings,
            itemIndex: itemIndex
        })
    }
}