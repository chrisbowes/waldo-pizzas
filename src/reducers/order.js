export const DATA_REQUESTED = 'ORDER/DATA_REQUESTED';
export const DATA_RECEIVED = 'ORDER/DATA_RECEIVED';
export const ORDER_UPDATE_REQUEST = 'ORDER/ORDER_UPDATE_REQUEST';
export const ORDER_UPDATED = 'ORDER/ORDER_UPDATED';
export const ORDER_ADD_TO_CART_REQUEST = 'ORDER/ORDER_ADD_TO_CART_REQUEST';
export const ORDER_ADD_TO_CART = 'ORDER/ORDER_ADD_TO_CART';


const initialState = {
    isLoading: false,
    data: null,
    cart: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_REQUESTED':
            return {
                ...state,
                isLoading: true
            }

        case 'DATA_RECEIVED':
            return {
                ...state,
                isLoading: false,
                data: action.data,
                message: action.message
            }

        case 'ORDER_ADD_TO_CART_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'ORDER_ADD_TO_CART':
        debugger;
            return {
                ...state,
                isLoading: false,
                cart: state.cart.push( action.cart ),
                message: 'Item added to cart'
            }

        case 'ORDER_UPDATE_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'ORDER_UPDATED':
            return {
                ...state,
                isLoading: false,
                data: action.data,
                message: 'ORDER updated'
            }

        default:
            return state
    }
}

