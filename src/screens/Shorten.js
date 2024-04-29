import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WithCommonButtons from '../components/WithCommonButtons';
import Cookies from "js-cookie";
import { isLoggedIn } from '../components/auth';  

function Shorten() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [saveMessage, setSaveMessage] = useState('');
    const navigate = useNavigate();

    const apiBaseUrl = process.env.REACT_APP_API_URL;

    const handleShorten = async () => {
        if (!longUrl.trim()) {
            setErrorMessage('Please enter a URL to shorten.');
            setShortUrl(''); // Ensure short URL is cleared when there is an input error
            return;
        }
        setErrorMessage('');
        setSaveMessage('');

        const response = await fetch(`${apiBaseUrl}/api/shorten`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ longUrl }),
        });
        if (response.ok) {
            const result = await response.text();
            setShortUrl(result);
        } else {
            alert('Failed to shorten URL');
        }
    };

    const handleSave = async () => {
        if (!longUrl.trim()) {
            setSaveMessage('Please enter a URL before saving.');
            setShortUrl(''); // Clear short URL when there's no input to save
            return;
        }

        if (!shortUrl) {
            setSaveMessage('No shortened URL to save.');
            return;
        }

        const userId = localStorage.getItem('user');
        const response = await fetch(`${apiBaseUrl}/api/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ shortUrlKey: shortUrl, longUrl: longUrl, userId: userId }),
        });
        if (response.ok) {
            setSaveMessage('URL saved successfully');
            // Clear inputs after successful save
            setLongUrl('');
            setShortUrl('');
        } else {
            setSaveMessage('Failed to save URL');
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center pt-20'>
            <div className='flex flex-col items-center w-11/12 md:w-8/12 lg:w-5/12'>
                <div className='font-semibold text-lg mb-6'>Shorten URLs</div>

                <div className='w-4/5 flex flex-col md:flex-row items-center mb-2'>
                    <input
                        type='text'
                        value={longUrl}
                        onChange={(e) => { setLongUrl(e.target.value); setErrorMessage(''); setSaveMessage(''); }}
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
                {errorMessage && <div className='text-red-500 text-sm mb-4'>{errorMessage}</div>}
                {saveMessage && <div className='text-green-500 text-sm mb-4'>{saveMessage}</div>}

                <div className='w-full mb-4'>
                    {shortUrl && (
                    <>
                       <div className='text-center text-lg font-semibold'>
                           Shortened URL:
                           <span className='text-blue-600 break-words'>
                               {`https://shortly-team4-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/${shortUrl}`}
                           </span>
                       </div>
                       <div className='text-center text-sm text-red-500'>
                           Remember: The shortened URL will not work until you click "Save"
                       </div>
                    </>
                        
                    )}
                </div>

                <div className='flex gap-4 mb-4 w-1/4'>
                    <button
                        onClick={handleSave}
                        className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400 flex-grow'
                    >
                        Save
                    </button>
                    {/* <button
                        className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400 flex-grow'
                    >
                        Add to List
                    </button> */}
                </div>

                {localStorage.getItem('user') !== 'guest' && (
                    <div className='w-full md:w-auto'>
                        <Link to="/all-urls">
                            <button
                                className='text-white bg-[#4e60ff] h-14 rounded-lg px-10 md:px-4 shadow-xl shadow-slate-400'
                            >
                                All Shortened URLs
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WithCommonButtons(Shorten);
