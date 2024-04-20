import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

const CommonButtons = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate('/home'); 
    };

    const navigateToProfile = () => {
        navigate('/profile'); // Replace '/profile' with the path to your profile page
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                credentials: 'include',  // Ensure cookies are sent
            });

            if (response.ok) {
                // Assume the server has successfully ended the session
                // Now clear the client-side state
                Cookies.remove('user'); // Adjust this depending on the actual cookie you need to remove
                console.log("logout cookie:", Cookies.get("user"));
                navigate('/'); // Redirect to login page or wherever appropriate
            } else {
                throw new Error('Failed to logout');
            }
        } catch (error) {
            console.error('Logout error:', error);
            alert('Logout failed'); // Display a user-friendly error message
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
                {location.pathname !== '/home' && (
                    <button onClick={goBack} style={{
                        backgroundColor: '#4e60ff',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '10px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        Back
                    </button>
                )}
                <div style={{ fontSize: '24px', color: '#5f6bcb' }}>Shortly</div>
                <div>
                    <button onClick={navigateToProfile} style={{
                        backgroundColor: '#4e60ff',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}>
                        Profile
                    </button>
                    <button onClick={handleLogout} style={{
                        backgroundColor: '#4e60ff',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                    }}>
                        Logout
                    </button>
                </div>
            </header>
            <main style={{ padding: '20px' }}>
                {children}
            </main>
        </div>
    );
};

export default CommonButtons;