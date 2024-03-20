import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email, password: password}),
        });

        if (response.ok) {
            // If login is successful, redirect to the home page
            navigate('/home');
        } else {
            // If login is not successful, show an alert
            alert('Invalid login credentials');
        }
    };

    return (
        <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>
            <div className='flex-column'>
                <div className='font-bold mb-20 items-center w-80 text-center text-2xl'>
                    SignIn
                </div>

                <form onSubmit={handleLogin}>
                    <div className='flex-column'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Email</div>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        />
                    </div>

                    <div className='flex-column mt-10'>
                        <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'
                        />
                    </div>

                    <div className='my-10'>
                        <button type='submit' className='text-white rounded-lg bg-[#4e60ff] p-2 w-80 h-10'>
                            Login
                        </button>
                    </div>
                </form>

                <div className='my-10'>
                    <button className='text-white rounded-lg bg-red-500 p-2 w-80 h-10'>Login - Google</button>
                </div>

                <div className='flex justify-center font-semibold mt-1'>
                    <Link to='/registration'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
