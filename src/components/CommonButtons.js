import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const CommonButtons = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const apiBaseUrl = process.env.REACT_APP_API_URL;

    const goBack = () => {
        navigate('/home'); 
    };

    const navigateToProfile = () => {
        navigate('/profile'); // Replace '/profile' with the path to your profile page
    };

    const handleLogout = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/logout`, {
                method: 'POST',
                credentials: 'include',  // Ensure cookies are sent
            });

            if (response.ok) {
                // Assume the server has successfully ended the session
                // Now clear the client-side state
                localStorage.removeItem('user'); // Adjust this depending on the actual storage you use
                console.log("logout localStorage:", localStorage.getItem('user'));
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
                    {localStorage.getItem('user') !== 'guest' && (
                        <button onClick={navigateToProfile} style={{
                            backgroundColor: '#4e60ff',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}>
                            Change Password
                        </button>
                    )}
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