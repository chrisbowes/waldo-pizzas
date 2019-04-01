export const MENU_DATA_REQUESTED = 'MENU/MENU_DATA_REQUESTED';
export const MENU_DATA_RECEIVED = 'MENU/MENU_DATA_RECEIVED';

const initialState = {
    isLoading: false,
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_DATA_REQUESTED':
            return {
                ...state,
                isLoading: true
            }

        case 'MENU_DATA_RECEIVED':
            return {
                ...state,
                isLoading: false,
                data: action.data,
                message: action.message
            }

        default:
            return state
    }
}

