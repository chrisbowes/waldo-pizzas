import React from 'react';
import { render } from 'react-dom';
import App from './components/app/app.component';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './app.store';
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
