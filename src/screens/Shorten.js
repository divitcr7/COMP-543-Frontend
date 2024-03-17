import React from 'react'
import { Link } from 'react-router-dom'

function Shorten() {
return (
    <div className='bg-[#e7e9f9] w-100vh justify-center items-center'>
        <div className='w-screen flex justify-center pt-10' >
            <div className='text-red-500 text-3xl' style={{ position: 'absolute', left: '20px' }}>
                Shortly
            </div>

            <button className='bg-[#f3f4ff] w-40 h-[50px] rounded-lg flex items-center justify-evenly shadow-md'>
                <Link to ='/URLs' className = 'text-blue-500'> Shortly.com</Link> 
                <span className = 'text-red-500' style={{ position: 'relative', left: '12px' }}> X </span>
            </button>
        </div>

        <div className = 'w-screen flex items-center justify-center'>
            <div className = 'flex-column w-5/12'>
                <div className = 'mt-20 flex justify-items-start w-80'>
                    <div className = 'font-semibold text-lg'>  Shorten URLs   </div>
                </div>

                <div className = 'flex justify-between'>
                    <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 h-16 mb-1.5 w-7/12'></input>
                    <button className='text-white text-left rounded-lg bg-[#4e60ff] p-2 h-16  mb-2 z-5 shadow-xl shadow-slate-400 w-2/6'>+ click to shorten</button>
                </div>
                
                <div className = 'flex justify-between'>
                    <input type='text' className='bg-[#e7e9f9] rounded-lg border-[#cfd0db] border-2 h-16 w-7/12'></input>
                    <button className='text-white text-left rounded-lg bg-[#4e60ff] p-2  h-16  z-5 shadow-md shadow-slate-400 w-2/6'>+ Add to List</button>
                </div>

                <button className = 'w-full border-[2px] border-[#ff4e4e] mt-10 h-16 rounded-lg text-[#ff4e4e]'> Save </button>
                
                <div className = 'flex justify-around m-10'>
                    <button className = 'text-white bg-[#4e60ff] h-14 rounded-lg w-36 shadow-xl shadow-slate-400'>Go Pro</button>
                    <Link to = '/'>
                    <button className = 'text-white bg-[#ff4e4e] h-14 rounded-lg w-36 shadow-xl shadow-slate-400'> Login </button>
                    </Link>
                </div>
                <div className = 'flex justify-center font-semibold mt-1'>
                <Link to = '/'> Back to Login</Link>
                </div>

                <div className = 'mt-20 flex justify-items-start w-80'>
                    <div className = 'font-semibold text-lg'>  Shortened URLs   </div>
                </div>

                <div className = 'bg-[#e7e9f9]'>
                <div className = 'w-full bg-[#f3f4ff] mt-10 h-16 rounded-lg flex items-center justify-between'> 
                        <a className = 'w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                        <div className = 'truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh</div>
                        <div className = 'w-1/12'> X </div> 
                 </div>

                 <div className = 'w-full mt-10 h-16 rounded-lg flex items-center justify-between'> 
                        <a className = 'w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                        <div className = 'truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh</div>
                        <div className = 'w-1/12'> X </div> 
                 </div>

                 <div className = 'w-full bg-[#f3f4ff] mt-10 h-16 rounded-lg flex items-center justify-between'> 
                        <a className = 'w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                        <div className = 'truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh</div>
                        <div className = 'w-1/12'> X </div> 
                 </div>

                 <div className = 'w-full mt-10 h-16 rounded-lg flex items-center justify-between'> 
                        <a className = 'w-3/12 text-center text-blue-600' href='shortly/73es3g'> shortly/73es3g </a>
                        <div className = 'truncate w-3/12'> asjhdfbaklsjehfbklauwefblkausebfnlkjasefbnilajsebfnilusebnflkwhaebfliauwhfliusehfiopuwehfiopesuh</div>
                        <div className = 'w-1/12'> X </div> 
                 </div>
                </div>

                


                
            </div>
            
        </div>
    </div>
)
}

export default Shorten
