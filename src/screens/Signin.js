import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='bg-[#e7e9f9] h-screen w-screen flex justify-center items-center'>
      <div className='flex-column'>
        <div className='font-bold mb-20 items-center w-80 text-center text-2xl'>
          SignIn
        </div>

        <div className='flex-column'>
          <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Email</div>
          
          <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'></input>
        </div>

        <div className='flex-column mt-10'>
          <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
          
          <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'></input>
        </div>

        <div className='my-10'>
          <Link to = '/shorten'>
          <button className='text-white rounded-lg bg-[#4e60ff] p-2 w-80 h-10'>Login</button>
          </Link>
        </div>      
          
        <div className = 'my-10'>
          <button className='text-white rounded-lg bg-red-500 p-2 w-80 h-10'>Login - Google</button>
        </div>

        <div className = 'flex justify-center font-semibold mt-1'>
         <Link to = '/registration'> Register </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Signin
