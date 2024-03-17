import React from 'react'
import { Link } from 'react-router-dom'
import {HomeIcon, LinkIcon,BookOpenIcon, UserCircleIcon} from '@heroicons/react/outline'


function Sidebar({currentPage}) {
  return (
    <div className = 'h-screen bg-[#e7e9f9] w-3/12'>
      <div className = 'flex-col'>
      <div className='text-red-500 text-3xl mt-10 mx-5' >
                Shortly
      </div>

      <hr class="mx-2/12 h-px w-8/12 my-8 bg-[#cfd0db] "></hr>

      <div className = ' my-5'>
        <Link className={`h-14 w-60 flex items-center my-5 px-2 rounded-r-lg ${currentPage === 'Home' ? 'bg-[#f3f4ff]' : ''}`}
              to = '/home'>
          <HomeIcon className = 'h-8'/>
          <div className = 'font-semibold text-xl mx-5'>Home</div>
        </Link>

        <Link className={`h-14 w-60 flex items-center my-5 px-2 rounded-r-lg ${currentPage === 'URLs' ? 'bg-[#f3f4ff]' : ''}`}
              to = '/urls'>
        <LinkIcon className = 'h-8'/>
          <div className  = 'font-semibold text-xl mx-5'>URLs</div>
        </Link>

        <Link className={`h-14 w-60 flex items-center my-5 px-2 rounded-r-lg ${currentPage === 'Shortened' ? 'bg-[#f3f4ff]' : ''}`}
              to = '/shortened'>
        <BookOpenIcon className = 'h-8' /> 
          <div className = 'font-semibold text-xl mx-5'>Shortened Urls</div>
        </Link>

        <Link className={`h-14 w-60 flex items-center my-5 px-2 rounded-r-lg ${currentPage === 'Account' ? 'bg-[#f3f4ff]' : ''}`}
              to = '/account'>
          <UserCircleIcon className = 'h-8' />

          <div className = 'font-semibold text-xl mx-5'>Account</div>
        </Link>

        </div>
      
      </div>
      

      
    </div>

  )
}

export default Sidebar
