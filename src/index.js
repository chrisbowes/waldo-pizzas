import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './store';
import './index.css';


const client = new ApolloClient({
    uri: "https://core-graphql.dev.waldo.photos/pizza"
});

// const ExchangeRates = () => (
//     <Query
//         query={gql`
//         {
//             pizzaSizes{
//               basePrice
//               name
//               maxToppings
//               toppings {
//                 defaultSelected
//                 pizzaSize {
//                   maxToppings
//                 }
//                 topping{
//                   name
//                   price
//                 }
//               }
//             }
//           }
//       `}
//     >
//         {({ loading, error, data }) => {
//             if (loading) return <p>Loading...</p>;
//             if (error) return <p>Error :(</p>;

//             return data.pizzaSizes.map((pizza, index) => (
//                 <div key={index}>
//                     <p>{pizza.name}: {pizza.basePrice}</p>
//                 </div>
//             ));
//         }}
//     </Query>
// );

const ApolloApp = () => (
    <ApolloProvider client={client}>

    </ApolloProvider>
);

render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App />
            </BrowserRouter>
        </Provider>,
</ApolloProvider>, document.getElementById('root'));
