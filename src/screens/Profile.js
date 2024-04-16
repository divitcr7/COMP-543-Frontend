import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import WithCommonButtons from '../components/WithCommonButtons';
function ChangePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://your-backend-endpoint/api/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include other headers as required, for instance, authorization headers
                },
                body: JSON.stringify({ password }),
            });

            if (response.ok) {
                alert('Password successfully changed!');
                navigate('/profile'); // Or any other route you want to redirect to
            } else {
                alert('Password change failed!');
            }
        } catch (error) {
            console.error('Change password error:', error);
            alert('An error occurred during the password change process');
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>
            <div className='bg-white p-10 rounded-lg shadow-md'>
                <h1 className='text-2xl font-bold text-[#5f6bcb] mb-4'>Change Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col mb-4'>
                        <label className='font-semibold text-lg mb-2'>New Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-full h-10 p-2'
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={togglePasswordVisibility}
                                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col mb-6'>
                        <label className='font-semibold text-lg mb-2'>Confirm New Password</label>
                        <div className='relative flex items-center'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-full h-10 pl-2 pr-10'
                            />
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className='absolute inset-y-0 right-0 pr-3 text-gray-600 cursor-pointer'
                            />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <button 
                            type="button"
                            onClick={() => navigate(-1)}
                            className='text-white bg-[#4e60ff] h-10 rounded-lg px-4 shadow-md'
                        >
                            Back
                        </button>
                        <button 
                            type="submit"
                            className='text-white bg-[#4e60ff] h-10 rounded-lg px-4 shadow-md'
                        >
                            Save Change
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default WithCommonButtons(ChangePassword);