import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductIndex from './products/ProductIndex';
import Login from './Login';
import Register from './Register';
import AuthRoute from './../util/route_util';
import Nav from './Nav';
import ProductDetail from './products/ProductDetail';
import CreateProduct from './products/CreateProduct';

const App = () => {
  return (
    <div>
      <Nav />
      <h1>Online Store</h1>
      <Switch>
        <Route exact path="/products/:id" component={ProductDetail} />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <Route exact path="/" component={ProductIndex} />
        <Route exact path="/create" component={CreateProduct} />
      </Switch>
    </div>
  );
};


export default App;
