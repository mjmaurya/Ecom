import React,{Component} from 'react';
import Header from './Header';
import {Switch,Route, Redirect} from 'react-router-dom'
import HomeComponent from './HomeComponent';
import Login from './users/Login';
import PageNotFound from './PageNotFound';
import Register from './users/Register';
import DashBoard from './Admin/Dashboard';
import PrivateAdminRoute from './PrivateRoute/PrivateAdminRoute';
import { Cart } from './users/Cart';
import AllProducts from './AllProducts';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route path="/" exact><HomeComponent/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/allproducts"><AllProducts/></Route>
        <Route path="/cart"><Cart/></Route>

        <PrivateAdminRoute path="/admin/dashboard" component={DashBoard}></PrivateAdminRoute>
        <Route path="/error"><PageNotFound/></Route>
        <Redirect to="/error"/> 
        </Switch>
      </div>
    );
  }
}
export default MainComponent;