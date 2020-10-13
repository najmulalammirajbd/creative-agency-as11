import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const UserContext = createContext();
function App() {
  const [logedInUser , setLogedInUser ] = useState({});
  return (
    <UserContext.Provider value = {[logedInUser,setLogedInUser]}>
     <Router>
          <Switch>
            <Route path="/home">
            <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/order">
            <Order></Order>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
