// frontend/src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const username = localStorage.getItem('username'); // Read username from localStorage

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {username}!</p>

            {/* Navigation Links */}
            <nav>
                <Link to="/settings">Go to Settings</Link>
            </nav>

            {/* Additional Dashboard Content */}
            <div>
                <h2>Your Monitoring System</h2>
                <p>Here you can manage your Zabbix monitoring system.</p>
            </div>
        </div>
    );
};

export default Dashboard;