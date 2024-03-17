import React from 'react'
import Sidebar from '../components/Sidebar'
import {ArrowRightIcon, PencilIcon, XIcon,BookmarkIcon } from '@heroicons/react/outline'
import cat from '../images/index.js'
import { Link } from 'react-router-dom'

function Urls() {
  return (
    <div className='flex bg-[#e7e9f9]'>
      <Sidebar currentPage='URLs' />

      <div className='mt-10 flex flex-col w-9/12 place-items-star'>
        <div className='flex w-10/12 justify-between '>

          <div className='flex'>
            <div className='text-3xl font-semibold '>
              Create URLs
            </div>

            <button className='text-white text-left rounded-lg bg-[#4e60ff]  px-0.5 py-2 w-32 mb-2 mx-10 z-5 shadow-xl shadow-slate-400 '>+ Create More</button>


          </div>




          <div className='flex w-2/6 justify-around'>
            <div className='font-semibold'>
              name
            </div>
            <img className='h-10 ' src={cat} />
            <Link to = '/'>
              <ArrowRightIcon className='h-5' />
            </Link>

          </div>


        </div>

        <div>
          <table className="mt-5">
            <thead>
              <tr>

                <th className="py-2 px-4 border-b-2 rounded-xl w- border-gray-300 text-center text-[#717fff] text-xl ">Names</th>
                <th className="py-2 px-4 border-b-2 rounded-xl w- border-gray-300 text-center text-[#717fff] text-xl ">Original URLs</th>
                <th className="py-2 px-4 border-b-2 rounded-xl w- border-gray-300 text-center text-[#717fff] text-xl ">Shortened URLs</th>
                <th className="py-2 px-4 border-b-2 rounded-xl w- border-gray-300 text-center text-[#717fff] text-xl ">Total Clicks</th>
                <th className="py-2 px-4 border-b-2 rounded-xl w- border-gray-300 text-center text-[#717fff] text-xl ">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {
                [1, 2, 3, 4, 5].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[#d4d6e8] rounded-xl' : 'bg-[#e7e9f9] rounded-xl'}>
                    <td className="py-2 px-4 border-b-2 w-44 border-gray-300 text-center rounded-lg ">Name {item}</td>
                    <td className="py-2 px-4 border-b-2 w-44 border-gray-300 text-center rounded-lg ">Original URL {item}</td>
                    <td className="py-2 px-4 border-b-2 w-44 border-gray-300 text-center rounded-lg ">Shortened URL {item}</td>
                    <td className="py-2 px-4 border-b-2 w-44 border-gray-300 text-center rounded-lg ">Total Clicks {item}</td>
                    <td className="py-2 px-4 border-b-2 w-44 border-gray-300 text-center rounded-lg ">Expiry Date {item}</td>
                  </tr>
                ))
              }

            </tbody>
          </table>

        </div>



      </div>
    </div>


  )
}

export default Urls
