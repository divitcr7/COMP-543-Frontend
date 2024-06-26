import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

// import * as path from "path";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const apiBaseUrl = process.env.REACT_APP_API_URL;

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${apiBaseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
            credentials: 'include', // Include credentials in the request
        });

        if (response.ok) {
            // Login successful, redirect to the home page
            localStorage.setItem('user', email);
            console.log("login success localStorage", localStorage.getItem('user'))
            navigate('/home');
        } else {
            // Login failed, show an alert
            alert('Invalid login credentials');
        }
    };

    const handleGuestLogin = async () =>{
        const guestEmail = 'guest';
        const guestPassword = Math.random().toString(36).slice(-8); // generate a random password

        const response = await fetch(`${apiBaseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: guestEmail, password: guestPassword}),
            credentials: 'include', // include credentials in the request
        });

        console.log("guest login response:", response)

        if (response.ok) {
            // Login successful, redirect to the home page
            localStorage.setItem('user', 'guest');
            console.log("login success localStorage", localStorage.getItem('user'))
            navigate('/home');
        } else {
            // Login failed, show an alert
            alert('Invalid login credentials');
        }
    }

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>

            <div className='flex-column'>
                <div className='font-bold mb-20 items-center w-80 text-center text-4xl text-[#5f6bcb]'>
                    Shortly
                </div>
                <div className='font-bold mb-20 items-center w-80 text-center text-2xl'>
                    Login
                </div>

                <form onSubmit={handleLogin}>
                    <div className='flex-column'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Email</div>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        />
                    </div>

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
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                            </button>
                        </div>
                    </div>

                    <div className='my-10'>
                        <button type="submit"
                                className='text-white rounded-lg bg-[#4e60ff] p-2 w-80 h-10'>
                            Login
                        </button>
                    </div>

                    <div className='my-10'>
                        <button onClick={handleGuestLogin} type="button" className='text-white rounded-lg bg-[#595959] p-2 w-80 h-10'>
                            Login as Guest
                        </button>
                    </div>
                </form>

                <div className='flex justify-center font-semibold mt-1'>
                    <Link to='/registration'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
