// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const username = localStorage.getItem('username'); // Retrieve username from localStorage

    const handleSignOut = () => {
        localStorage.clear(); // Clear localStorage on sign out
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.leftSection}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/dashboard" style={styles.link}>Dashboard</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
                <Link to="/calendar" style={styles.link}>Calendar</Link>
                <Link to="/settings" style={styles.link}>Settings</Link>
            </div>
            <div style={styles.rightSection}>
                <span style={styles.username}>{username}</span>
                <button onClick={handleSignOut} style={styles.signOutButton}>Sign out</button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
    },
    leftSection: {
        display: 'flex',
        gap: '20px',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '16px',
    },
    username: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    signOutButton: {
        padding: '5px 10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Navbar;