import React from 'react'
// import logo from './'

const Navbar = () => {
  return (
    <div className='
    flex h-full w-full 
    m-0 p-4 py-4 justify-between items-center
    '>

        {/* left box  */}
        <div className='h-full flex justify-center items-center gap-2'>
            <img className='w-[40px] h-[40px] rounded-full'
            src="./assets/img12.png" alt="" />
            <span className="leading-[20px] font-title text-[20px]">Attendance</span>
        </div>

        {/* right box  */}
        <div className='h-full flex gap-4 justify-center items-center'>
            <button className='px-4 py-3 bg-gray-800 rounded-lg text-sm'>Login</button>
            <button className='px-4 py-3 bg-gray-800 rounded-lg text-sm'>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar