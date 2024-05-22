// src/components/Dashboard.js
import React, { useState } from 'react';
import DeviceList from './DeviceList';
import { Route, Switch, useHistory } from 'react-router-dom';
import DeviceDetails from './DeviceDetails';
import Login from './Login';

function Dashboard() {
    const [devices, setDevices] = useState([]);
    const history = useHistory();

    const handleLogin = (devices) => {
        setDevices(devices);
        history.push('/devices');
    };

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login onLogin={handleLogin} />
                </Route>
                <Route exact path="/devices">
                    <DeviceList devices={devices} />
                </Route>
                <Route path="/device/:id">
                    <DeviceDetails />
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;
