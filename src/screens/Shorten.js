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
        <div className='bg-[#e7e9f9] w-100vh justify-center items-center'>
            {/* <div className='w-screen flex justify-center pt-10'>
                <div className='text-red-500 text-3xl' style={{position: 'absolute', left: '20px'}}>
                    Shortly
                </div>

                <button className='bg-[#f3f4ff] w-40 h-[50px] rounded-lg flex items-center justify-evenly shadow-md'>
                    <Link to='/URLs' className='text-blue-500'> Shortly.com</Link>
                    <span className='text-red-500' style={{position: 'relative', left: '12px'}}> X </span>
                </button>
            </div> */}

            <div className='w-screen flex items-center justify-center'>
                <div className='flex-column w-5/12'>
                    <div className='mt-20 flex justify-items-start w-80'>
                        <div className='font-semibold text-lg'> Shorten URLs</div>
                    </div>

                    <div className='flex justify-between mt-10'>
                        <input
                            type='text'
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 h-16 w-7/12'
                        />
                        <button
                            onClick={handleShorten}
                            className='text-white rounded-lg bg-[#4e60ff] p-2 h-16 shadow-xl shadow-slate-400 w-2/6'
                        >
                            click to shorten
                        </button>
                    </div>

                    <div className='flex justify-between'>
                        <input type='text'
                               className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 h-16 w-7/12' value={`https://shortly-team4-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/${shortUrl}`}>
                        </input>
                        <button
                            className='text-white text-left rounded-lg bg-[#4e60ff] p-2  h-16  z-5 shadow-md shadow-slate-400 w-2/6'>Add
                            to List
                        </button>
                    </div>

                    <div className='mt-4 text-center'>
                        <button
                            onClick={handleSave}
                            className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400'
                        >
                            Save
                        </button>
                    </div>
                    <div className='mt-4 text-center'>
                        <Link to="/all-urls">
                            <button
                                className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400'
                            >
                                All Shortened URLs
                            </button>
                        </Link>
                    </div>
                    {/* <div className='flex justify-around m-10'>
                        <button className='text-white bg-[#4e60ff] h-14 rounded-lg w-36 shadow-xl shadow-slate-400'>Go
                            Pro
                        </button>
                        <Link to='/'>
                            <button
                                className='text-white bg-[#ff4e4e] h-14 rounded-lg w-36 shadow-xl shadow-slate-400'> Login
                            </button>
                        </Link>
                    </div> */}
                    {/* <div className='flex justify-center font-semibold mt-1'>
                        <button
                            onClick={handleLogout}
                            className='text-white bg-[#4e60ff] h-14 rounded-lg px-4 shadow-xl shadow-slate-400'
                        >
                            Log Out
                        </button>
                    </div> */}

                    {/* <div className='mt-20 flex justify-items-start w-80'>
                        <div className='font-semibold text-lg'> Shortened URLs</div>
                    </div> */}

                    {/* <div className='bg-[#e7e9f9]'>
                        <div className='w-full bg-[#f3f4ff] mt-10 h-16 rounded-lg flex items-center justify-between'>
                            <a className='w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                            <div
                                className='truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh
                            </div>
                            <div className='w-1/12'> X</div>
                        </div>

                        <div className='w-full mt-10 h-16 rounded-lg flex items-center justify-between'>
                            <a className='w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                            <div
                                className='truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh
                            </div>
                            <div className='w-1/12'> X</div>
                        </div>

                        <div className='w-full bg-[#f3f4ff] mt-10 h-16 rounded-lg flex items-center justify-between'>
                            <a className='w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                            <div
                                className='truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh
                            </div>
                            <div className='w-1/12'> X</div>
                        </div>

                        <div className='w-full mt-10 h-16 rounded-lg flex items-center justify-between'>
                            <a className='w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                            <div
                                className='truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh
                            </div>
                            <div className='w-1/12'> X</div>
                        </div>
                    </div> */}


                </div>

            </div>
        </div>
    )
}

export default WithCommonButtons(Shorten);
