export const ADD_TO_CART_REQUEST = 'CART/ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'CART/ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART_REQUEST = 'CART/REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'CART/REMOVE_FROM_CART_SUCCESS';
export const TOGGLE_OPTION_SELECTION_REQUEST ='CART/TOGGLE_OPTION_SELECTION_REQUEST';
export const TOGGLE_OPTION_SELECTION = 'CART/TOGGLE_OPTION_SELECTION';


const initialState = {
    isLoading: false,
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'ADD_TO_CART_SUCCESS':
            return {
                ...state,
                isLoading: false,
                items: [...state.items, action.item],
                message: 'Item added to cart'
            }

        case 'REMOVE_FROM_CART_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'REMOVE_FROM_CART_SUCCESS':
            return {
                ...state,
                isLoading: false,
                items: state.items.filter((val, i) => i !== action.itemIndex),
                message: 'Item removed from cart'
            }

        case 'TOGGLE_OPTION_SELECTION_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'TOGGLE_OPTION_SELECTION':
            return {
                ...state,
                isLoading: false,
                items: state.items.map((item, i) => {
                    if (i === action.itemIndex) {
                        return { ...item, toppings: action.options }
                    } else {
                        return item
                    }
                }),
                message: 'Option selection amended'
            }

        default:
            return state
    }
}

