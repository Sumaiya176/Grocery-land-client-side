import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';

export const userContext = createContext();
export const productContext = createContext();
export const checkOutContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState([]);
  const [checkOut, setCheckOut] = useState([])

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <productContext.Provider value={[products, setProducts]}>
      <checkOutContext.Provider value={[checkOut, setCheckOut]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
             <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>

            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            
            {/* <Route path="*">
              <h1>Page not found 404!</h1>
            </Route> */}
          </Switch>
        </Router>
        </checkOutContext.Provider>
      </productContext.Provider>
    </userContext.Provider>
  );
}

export default App;
