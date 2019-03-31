import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://core-graphql.dev.waldo.photos/pizza"
});

export const orderAddToCartRequest = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'ORDER_ADD_TO_CART_REQUEST'
        })
        dispatch(
            orderAddToCartSuccess(item)
        );
    }
}

export const orderAddToCartSuccess = (item, message) => {
    return {
        type: 'ORDER_ADD_TO_CART',
        cart: item,
        message: message,
        receivedAt: Date.now
    }
}

export const orderUpdateRequest = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'ORDER_UPDATE_REQUEST'
        })
        dispatch(
            orderUpdated(data)
        );
    }
}

export const orderUpdated = (data) => {
    return {
        type: 'ORDER_UPDATED',
        data: data
    }
}

export const dataRequested = () => {
    return async (dispatch) => {
        dispatch({
            type: 'DATA_REQUESTED'
        })
        // let data = '';
        let request = await client
            .query({
                query: gql`
                {
                    pizzaSizes{
                      basePrice
                      name
                      maxToppings
                      toppings {
                        defaultSelected
                        pizzaSize {
                          maxToppings
                        }
                        topping{
                          name
                          price
                        }
                      }
                    }
                }
                `
            });
        console.log(request.data);
        let message = `data retrieved`;
        dispatch(dataRequestSuccess(request.data, message));
    }
}

export const dataRequestSuccess = (data, message) => {
    console.log(data);
    return {
        type: 'DATA_RECEIVED',
        data: data,
        message: message,
        receivedAt: Date.now
    }
}