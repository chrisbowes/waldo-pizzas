import React from 'react';
import { Route, Link } from 'react-router-dom';
import SelectOrder from '../../containers/selectOrder/app.container.select-order';
import ReviewOrder from '../../containers/reviewOrder/app.container.review-order';
import MiniCart from '../../containers/minicart/app.container.minicart';


const App = () => (
  <div className="ciam-portal-app ciam-ui-layout">
    <header className="ciam-portal-app__header ciamUI-layout-wrapper">
      <h1>Waldo's Pizzas</h1>
    </header>
    <button><Link to="ReviewOrder">Review Order <MiniCart /></Link></button>
    <main>
      <Route exact path="/" component={ SelectOrder } />
      <Route exact path="/ReviewOrder" component={ ReviewOrder } />
    </main>
  </div>
)

export default App;