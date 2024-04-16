import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import WithCommonButtons from '../components/WithCommonButtons';
function Shorten() {

    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const navigate = useNavigate();
    
    const handleShorten = async () => {
        // send a POST request to the server to shorten the URL
        const response = await fetch('http://localhost:8080/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({longUrl}),
        });
        if (response.ok) {
            const result = await response.text(); // get the shortened URL from the response
            setShortUrl(result); // set the shortened URL in the state
        } else {
            alert('Failed to shorten URL');
        }
    };

    const handleSave = async () => {
        if (!shortUrl) {
            alert('No shortened URL to save.');
            return; // exit the function early if there is no shortened URL
        }

        // get the userId from the localStorage
        const userId = localStorage.getItem('userId');
        console.log(userId);
        const response = await fetch('http://localhost:8080/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({shortUrlKey: shortUrl, longUrl: longUrl, userId: userId}),
        });
        if (response.ok) {
            alert('URL saved successfully');
        } else {
            alert('Failed to save URL');
        }
    };

    const handleLogout = async () => {
        const response = await fetch('http://localhost:8080/api/logout', {
            method: 'POST',
        });
        if (response.ok) {
            // Delete the session ID cookie
            document.cookie = 'SESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userId');
            // Handle logout success, redirect to the login page
            navigate('/');
        } else {
            // Handle logout failure
            alert('Logout failed')
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center pt-20'> 
            <div className='flex flex-col items-center w-11/12 md:w-8/12 lg:w-5/12'>
                <div className='font-semibold text-lg mb-6'>Shorten URLs</div>

                <div className='w-4/5 flex flex-col md:flex-row items-center mb-4'>
                    <input
                        type='text'
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 h-16 flex-grow mr-2'
                        placeholder='Paste your long URL here'
                    />
                    <button
                        onClick={handleShorten}
                        className='text-white rounded-lg bg-[#4e60ff] p-2 h-16 shadow-xl shadow-slate-400 mt-4 md:mt-0'
                    >
                        Shorten
                    </button>
                </div>

                <div className='w-full mb-4'>
                    {shortUrl && (
                        <div className='text-center text-lg font-semibold'>
                            Shortened URL:
                            <span className='text-blue-600 break-words'> 
                                {`https://shortly-team4-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/${shortUrl}`}
                            </span>
                        </div>
                    )}
                </div>

                <div className='flex gap-4 mb-4 w-full'>
                    <button
                        onClick={handleSave}
                        className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400 flex-grow'
                    >
                        Save
                    </button>
                    <button
                        // Add functionality for 'Add to List' button as needed
                        className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400 flex-grow'
                    >
                        Add to List
                    </button>
                </div>

                <div className='w-full md:w-auto'>
                    <Link to="/all-urls">
                        <button
                            className='text-white bg-[#4e60ff] h-14 rounded-lg px-10 md:px-4 shadow-xl shadow-slate-400'
                        >
                            All Shortened URLs
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WithCommonButtons(Shorten);
