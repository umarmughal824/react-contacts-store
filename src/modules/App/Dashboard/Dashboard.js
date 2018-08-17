import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

import {PROTECTED_ROUTES} from "routes";

const Dashboard = () =>
    <div className="dashboard container">
        <Sidebar />

        {PROTECTED_ROUTES}
    </div>;

export default Dashboard;
