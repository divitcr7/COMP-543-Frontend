import React from 'react';
import { Link } from 'react-router-dom';
import WithCommonButtons from '../components/WithCommonButtons';
const AllShortenedUrls = () => {

    const googleAnalyticsUrl = "https://analytics.google.com/analytics/web/"; // Replace with the actual URL for the Google Analytics dashboard

  // This would be replaced with data fetched from the backend
    const shortenedUrls = [
        {
        id: 1,
        originalUrl: 'https://www.examplelongwebsite.com/some-long-url-path',
        shortenedUrl: 'https://short.ly/1xyz',
        clicks: 123,
        createdAt: '2024-04-01T09:00:00.000Z',
        expiresAt: '2024-10-01T09:00:00.000Z',
        },
        // More dummy URL data...
    ];

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