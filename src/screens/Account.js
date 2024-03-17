import React from 'react'
import Sidebar from '../components/Sidebar'
import {ArrowRightIcon, PencilIcon, XIcon,BookmarkIcon } from '@heroicons/react/outline'
import cat from '../images/index.js'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <div className='flex bg-[#e7e9f9]'>
      <Sidebar currentPage='Account' />

      <div className='mt-10 flex flex-col w-8/12'>
        <div className='flex w-10/12 justify-between '>

          <div className='text-3xl font-semibold '>
            Account
          </div>


          <div className='flex w-2/6 justify-around'>
            <div className='font-semibold'>
              name
            </div>
            <img className = 'h-10 border-' src={cat} />
            <Link to = '/'> 
              <ArrowRightIcon className = 'h-5' />
            </Link>

          </div>


        </div>

        <div className = 'mt-10 flex w-10/12 bg-[#e3e6ff] rounded-lg h-5/6 p-5'>
          <div className = 'h-full w-1/2'>

            <div className = ' mx-5'>
              <div className = 'w-full font-bold text-xl text-[#5f6bcb]'> account name</div>
              <div className = 'flex items-center h-full pt-3'>

                <div className = 'mt-5 w-3/6 h-full'>
                  <img className = 'h-40'src = {cat}/>

                </div>

                <div className = 'flex-col mx-5 h-full w-3/6 items-center'>

                <button className = 'my-5 text-white text-lg  bg-[#4e60ff]  rounded-xl h-14 w-40 shadow-xl shadow-slate-400 flex items-center justify-evenly'>
                  <PencilIcon className = 'h-5'/>
                  Edit image
                  </button>

                <button className = 'text-white text-lg  bg-[#ff5c60]  rounded-xl h-14 w-40 shadow-xl shadow-slate-400 flex items-center justify-evenly'>
                <XIcon className = 'h-5'/>
                Del Image
                </button>
                
                

                </div>
                
              </div>
              
            </div>
            
            <div className = 'mx-5 my-5'>
              <div className = 'text-[#5f6bcb] font-bold text-lg '>
                Bio
              </div>
              <div className = 'mt-10 mx-10'>
                I make em smol
              </div>
            </div>

          </div>
        
          <div className = ' w-1/2 flex flex-col justify-between' >

            <div className = 'flex flex-col justify-evely'>
              <div className='flex-col mb-5'>
                <div className=' mb-2 font-bold text-xl text-[#5f6bcb]' >Email</div>
                
                <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10 '></input>
              </div>

              <div className='flex-col my-5'>
                <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Password</div>
                
                <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'></input>
              </div>

              <div className='flex-col my-5'>
                <div className='text-[#5f6bcb] mb-2 font-bold text-xl'>Account Name</div>
                
                <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 w-80 h-10'></input>
              </div>
            </div>

            <div className = 'flex place-content-end'>
            <button className = 'my-5 text-white text-lg  bg-[#4e60ff]  rounded-xl h-14 w-40 shadow-xl shadow-slate-400 flex items-center justify-evenly'>
                  <BookmarkIcon className = 'h-5'/>
                  Save
            </button>
            </div>
            

          </div>



</div>
        
        </div>
      </div>

      

  )
}

export default Account
