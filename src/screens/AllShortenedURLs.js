import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import WithCommonButtons from '../components/WithCommonButtons';
import {useState} from 'react';
import Cookies from "js-cookie";


const AllShortenedUrls = () => {

    const [shortenedUrls, setShortenedUrls] = useState([]);
    const googleAnalyticsUrl = 'https://analytics.google.com/analytics/web/#/report-home/a212059432w164773516p165732017';
    const user = Cookies.get('user');

    useEffect(() => {
        // Function to fetch URLs
        const fetchUrls = async () => {
            const response = await fetch(`http://localhost:8080/api/fetchUrls/${user}`, {
                method: 'GET', // Assuming GET is the method required
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const urls = await response.json();
                setShortenedUrls(urls);
            } else {
                // Handle errors or no data case
                console.error('Failed to fetch URLs');
                setShortenedUrls([]);
                alert('Failed to fetch URLs');
            }
        };

        fetchUrls().then(r => console.log("fetchUrls response:", r));
    }, []); // The empty array means this effect will only run once, similar to componentDidMount


    // Function to format dates (e.g., "April 1, 2024")
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>All Shortened URLs</h1>
            <div className='flex justify-between items-center mb-4'>
                <button
                    onClick={() => window.open(googleAnalyticsUrl, '_blank')}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    View in Google Analytics
                </button>
            </div>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white'>
                    <thead className='bg-blue-500 text-white'>
                    <tr>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Original URL</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Shortened URL</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Clicks</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Created At</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Expires At</th>
                    </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                    {shortenedUrls.map((url) => (
                        <tr key={url.id}>
                            <td className='text-left py-3 px-4'>{url.originalUrl}</td>
                            <td className='text-left py-3 px-4'>
                                <Link to={url.shortenedUrl}>{url.shortenedUrl}</Link>
                            </td>
                            <td className='text-left py-3 px-4'>{url.clicks}</td>
                            <td className='text-left py-3 px-4'>{formatDate(url.createdAt)}</td>
                            <td className='text-left py-3 px-4'>{formatDate(url.expiresAt)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WithCommonButtons(AllShortenedUrls);