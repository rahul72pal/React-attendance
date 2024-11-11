import React from 'react'

const Navbar = () => {
  return (
    <div className='
    flex h-full w-full 
    m-0 p-4 justify-between items-center
    '>

        {/* left box  */}
        <div className='h-full flex justify-center items-center gap-2'>
            <img className='w-[50px] h-[50px] rounded-full'
            src="./assets/bgWhiteLogo.png" alt="" />
            <span className="leading-[24px] font-title text-[20px]">Attendance</span>
        </div>

        {/* right box  */}
        <div className='h-full flex gap-4'>
            <button className='px-4 py-3 bg-gray-800 rounded-lg'>Login</button>
            <button className='px-4 py-3 bg-gray-800 rounded-lg'>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar