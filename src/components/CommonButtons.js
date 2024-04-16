import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommonButtons = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'POST',
            });
            if (response.ok) {
                // Clear local storage or any other session identifiers
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('userId');
                // Redirect to login page
                navigate('/');
            } else {
                alert('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed');
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen'>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#f3f4ff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{ fontSize: '24px', color: '#5f6bcb' }}>Shortly</div>
                <button onClick={handleLogout} style={{
                    backgroundColor: '#4e60ff',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                    Logout
                </button>
            </header>
            <main style={{ padding: '20px' }}>
                {children}
            </main>
        </div>
    );
};

export default CommonButtons;