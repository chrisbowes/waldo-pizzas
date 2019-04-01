export const ADD_TO_CART_REQUEST = 'CART/ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'CART/ADD_TO_CART_SUCCESS';


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

        default:
            return state
    }
}

