import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://core-graphql.dev.waldo.photos/pizza"
});

export const dataRequested = () => {
    return async (dispatch) => {
        dispatch({
            type: 'MENU_DATA_REQUESTED'
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
        type: 'MENU_DATA_RECEIVED',
        data: data,
        message: message,
        receivedAt: Date.now
    }
}