import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './store';
import './index.css';


const client = new ApolloClient({
    uri: "https://core-graphql.dev.waldo.photos/pizza"
});

render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App />
            </BrowserRouter>
        </Provider>,
</ApolloProvider>, document.getElementById('root'));
