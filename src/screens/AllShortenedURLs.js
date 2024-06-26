import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import WithCommonButtons from '../components/WithCommonButtons';
import {useState} from 'react';


const AllShortenedUrls = () => {

    const [shortenedUrls, setShortenedUrls] = useState([]);
    const googleAnalyticsUrl = 'https://analytics.google.com/analytics/web/#/report-home/a212059432w164773516p165732017';
    const user = localStorage.getItem('user');
    const apiBaseUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        // Function to fetch URLs
        const fetchUrls = async () => {
            const response = await fetch(`${apiBaseUrl}/api/fetchUrls/${user}`, {
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


    // Function to format dates (e.g., "April 1, 2024, 12:00:00 PM
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
    });

    console.log(shortenedUrls)

    return (
        <div className='container mx-auto p-4'>
            <style>
            {`
                .url-hover:hover {
                    color: #3498db; 
                    text-decoration: underline;
                    cursor: pointer;
                }
                .fixed-width {
                    max-width: 250px; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all; 
                }
                .fixed-width:hover {
                    white-space: normal; 
                }
                table {
                    table-layout: fixed;
                }
                td {
                    word-break: break-word; 
                }
            `}
            </style>
            <h1 className='text-2xl font-bold mb-4'>All Shortened URLs</h1>
            {/* <div className='flex justify-between items-center mb-4'>
                <button
                    onClick={() => window.open(googleAnalyticsUrl, '_blank')}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    View in Google Analytics
                </button>
            </div> */}
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white'>
                    <thead className='bg-blue-500 text-white'>
                    <tr>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Original URL</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Shortened URL</th>
                        <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>Expires At</th>
                    </tr>
                    </thead>
                    <tbody className='text-gray-700'>
                {shortenedUrls.map((url) => (
                    <tr key={url.id}>
                        <td className='text-left py-3 px-4 fixed-width url-hover'>                            <a
                                href={url.longUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="url-hover"
                            >
                                {url.longUrl}
                            </a>
                        </td>
                        <td className='text-left py-3 px-4'>
                            <a
                                href={`https://shortly-team4-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/${url.shortUrlKey}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="url-hover"
                            >
                                {`https://shortly-team4-backend-dot-rice-comp-539-spring-2022.uk.r.appspot.com/${url.shortUrlKey}`}
                            </a>
                            </td>
                            <td className='text-left py-3 px-4'>{formatDate(url.expirationDateTime)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WithCommonButtons(AllShortenedUrls);