import React from 'react';

import { Route, Switch } from 'react-router-dom';

import App from 'modules/App/App';
import ContactsDashboard from 'modules/App/ContactsDashboard/ContactsDashboard';
import TodoDashboard from 'modules/App/TodoDashboard/TodoDashboard';
import MyAccount from 'modules/MyAccount/MyAccount';
import Dashboard from "./modules/App/Dashboard/Dashboard";
import Login from "./modules/MyAccount/Login/Login";
import Signup from "./modules/MyAccount/Signup/Signup";

import {NAV_LINKS} from "./utils/constants";

export const PROTECTED_ROUTES = (
    <Switch>
        <Route path="/dashboard/contacts/" component={ContactsDashboard} />
        <Route path="/dashboard/todos/" component={TodoDashboard} />
        <Route path="/dashboard/account/" component={MyAccount} />
    </Switch>
);

export default (
  <Switch>
    <Route path={NAV_LINKS.ROOT.url} exact component={App} />
    <Route path={NAV_LINKS.LOGIN.url} component={Login} />
    <Route path={NAV_LINKS.SIGNUP.url} component={Signup} />
    <Route path={NAV_LINKS.HOME.url} component={Dashboard} />
  </Switch>
);
