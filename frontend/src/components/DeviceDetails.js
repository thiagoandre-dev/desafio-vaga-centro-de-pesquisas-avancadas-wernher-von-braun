import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function DeviceDetails() {
    const { id } = useParams();
    const [device, setDevice] = useState(null);
    const [commands, setCommands] = useState([]);
    const [selectedCommands, setSelectedCommands] = useState([]);

    useEffect(() => {
        const fetchDevice = async () => {
            const response = await api.get(`/device/${id}`);
            setDevice(response.data);
            setCommands(response.data.commands);
        };
        fetchDevice();
    }, [id]);

    const handleCommandSelection = (command) => {
        setSelectedCommands((prev) =>
            prev.includes(command)
                ? prev.filter((cmd) => cmd !== command)
                : [...prev, command]
        );
    };

    const executeCommands = async () => {
        for (const command of selectedCommands) {
            try {
                const response = await api.post(`/device/${id}/command`, { command });
                console.log(`Result for ${command.operation}: ${response.data.result}`);
            } catch (error) {
                console.error(`Failed to execute command ${command.operation}`, error);
            }
        }
    };

    return (
        <div>
            {device ? (
                <>
                    <h1>{device.description}</h1>
                    <h2>Commands</h2>
                    <ul>
                        {commands.map((command) => (
                            <li key={command.operation}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={command.operation}
                                        onChange={() => handleCommandSelection(command)}
                                    />
                                    {command.description}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={executeCommands}>Execute Selected Commands</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DeviceDetails;
