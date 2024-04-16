import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password}),
            });

            if (response.ok) {
                // If registration is successful, redirect to the login page
                alert('Registration successful!')
                navigate('/');
            } else {
                // If registration is not successful, show an alert
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred during registration');
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>
            <div className='flex-column'>
                <div className='font-bold mb-20 items-center w-80 text-center text-2xl text-[#ff5c60]'>
                    Registration
                </div>

                <form onSubmit={handleRegistration}>
                    <div className='flex-column'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Email</div>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        ></input>
                    </div>

                    {/* <div className='flex-column mt-10'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        ></input>
                    </div> */}

                    <div className='flex-column mt-10'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
                        <div className='flex items-center border-[#cfd0db] border-2 w-80 rounded-lg bg-[#e7e9f9]'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='flex-grow p-2 bg-transparent outline-none'
                            />
                            <button 
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='p-2'
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    <div className='my-10'>
                        <button type='submit' className='text-white rounded-lg bg-[#4e60ff] p-2 w-80 h-10'>Register
                        </button>
                    </div>
                </form>

                <div>
                    <button className='text-white rounded-lg bg-red-500 p-2 w-80 h-10'>Login - Google</button>
                </div>
                <div className='flex justify-center font-semibold mt-1'>
                    <Link to='/'> Back to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;
