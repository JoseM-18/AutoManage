import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InventoryPage from './pages/InventoryPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Inventory</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={InventoryPage} />
        <Route path="/orders/:id" component={OrderPage} />
      </Switch>
    </Router>
  );
}

export default App;