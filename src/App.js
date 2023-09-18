import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/inventory">
            <InventoryPage />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/">
            <h1>Welcome to My Car Dealership App</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;