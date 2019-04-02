import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SelectOrder from '../../containers/selectOrder/app.container.select-order';
import ReviewOrder from '../../containers/reviewOrder/app.container.review-order';
import MiniCart from '../../containers/minicart/app.container.minicart';
import './index.css';


const App = () => (
  <div className="waldo-ui-layout">
    <div className="waldo-ui-layout__wrapper">
      <header className="waldo-ui-layout__header">
        <h1>Waldo's Pizzas</h1>
      </header>
      <nav className="waldo-ui-layout__nav">
      <NavLink className="waldo-ui-layout__nav-link" activeClassName="waldo-ui-layout__nav-link--selected" to=""><button>Select Order </button></NavLink>
      <NavLink className="waldo-ui-layout__nav-link waldo-ui-layout__nav-link--cart" activeClassName="waldo-ui-layout__nav-link--selected" to="ReviewOrder"> <button>Review Order <MiniCart /></button></NavLink>
      </nav>
      <main className="waldo-ui-layout__main">
        <Route exact path="/" component={SelectOrder} />
        <Route exact path="/ReviewOrder" component={ReviewOrder} />
      </main>
    </div>
  </div>
)

export default App;