import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Login from "./components/Login";
import Register from "./components/Register";
import ConfirmEmail from "./components/ConfirmEmail";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/confirm-email/:token" component={ConfirmEmail} />
    </Switch>
  );
}
