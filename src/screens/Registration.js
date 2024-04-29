import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {isEmailValid, evaluatePasswordStrength, isPasswordStrongEnough, getPasswordRules} from '../components/helper.js';
function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [passwordStrength, setPasswordStrength] = useState('');
    const [strengthColor, setStrengthColor] = useState('');
    const passwordRules = getPasswordRules(); // Retrieve password rules

    const apiBaseUrl = process.env.REACT_APP_API_URL;


    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
        const { passwordStrength, strengthColor } = evaluatePasswordStrength(newPassword);
        setPasswordStrength(passwordStrength);
        setStrengthColor(strengthColor);
    };
    
    const handleRegistration = async (e) => {
        e.preventDefault();

        if (!isEmailValid(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isPasswordStrongEnough(password)) {
            alert('Please use a strong password.');
            return;
        }
        try {
            const response = await fetch(`${apiBaseUrl}/api/register`, {
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
                <div className='font-bold mb-20 items-center w-80 text-center text-4xl text-[#5f6bcb]'>
                    Shortly
                </div>
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
                            className='p-2 bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        ></input>
                    </div>

                    <div className='flex-column mt-10'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
                        <div className='flex items-center border-[#cfd0db] border-2 w-80 rounded-lg bg-[#e7e9f9]'>
                        <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => handlePasswordChange(e.target.value)}
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
                        <div className='w-80 text-xs mt-1 text-gray-600'>{passwordRules}</div>

                        <div style={{ width: '100%', backgroundColor: '#e7e9f9', height: '5px', borderRadius: '5px', marginTop: '5px' }}>
                            <div style={{ width: `${passwordStrength === 'Weak' ? '33%' : passwordStrength === 'Medium' ? '66%' : passwordStrength === 'Strong' ? '100%' : '0%'}`, backgroundColor: strengthColor, height: '5px', borderRadius: '5px' }}></div>
                        </div>
                        <div className='text-sm mt-2' style={{ color: strengthColor }}>
                            {passwordStrength}
                        </div>
                    </div>

                    <div className='my-10'>
                        <button type='submit' className='text-white rounded-lg bg-[#4e60ff] p-2 w-80 h-10'>Register
                        </button>
                    </div>
                </form>

                {/* <div>
                    <button className='text-white rounded-lg bg-red-500 p-2 w-80 h-10'>Login - Google</button>
                </div> */}
                <div className='flex justify-center font-semibold mt-1'>
                    <Link to='/'> Back to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;
