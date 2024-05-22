import React from 'react';
import { Link } from 'react-router-dom';

function DeviceList({ devices }) {
    return (
        <div>
            <h1>Devices</h1>
            <ul>
                {devices.map((device) => (
                   <li key={device.identifier}>
                       <Link to={`/device/${device.identifier}`}>{device.description}</Link>
                   </li>
                ))}
            </ul>
        </div>
    );
}

export default DeviceList;
