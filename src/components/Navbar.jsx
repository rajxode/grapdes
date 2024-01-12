import React, { useState } from 'react';

function Navbar() {

    const [ showMenu , setShowMenu] = useState(false);

    return (
        <>
        <div className='w-full h-[80px] flex justify-between items-center px-[7%]'>
            <div className='w-1/2 md:w-1/5'>
                <img src="./main/logo.png" alt="brandLogo" className='h-auto w-auto' />
            </div>
            <div className='w-1/2 hidden md:flex justify-between px-2 items-center font-semibold'>
                <div>
                    Solutions <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
                <div>
                    Resource <span><i class="fa-solid fa-angle-down"></i></span>
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Contact Us
                </div>
                <div className='flex items-center justify-center h-full'>
                    <button className='py-[2px] px-3 border rounded-full border-black flex items-center hover:bg-[#30A981] hover:text-white hover:border-none'>
                        Login
                    </button>
                </div>
            </div>
            <div className='block md:hidden'>
                <span className='hover:bg-slate-200 px-2 py-1 text-xl rounded cursor-pointer'
                    onClick={() => setShowMenu(!showMenu)}>
                        <i class="fa-solid fa-bars"></i>
                </span>
            </div>
        </div>
        <div className={`fixed top-0 right-0 bg-white opacity-95 h-full flex flex-col justify-start
            transition-all duration-700 translate-x-0 z-20 ${showMenu ? 'w-2/3 p-[5%]' : 'w-0'}`}>
            <div className='w-full h-[50px] bg-slate-200 flex items-center justify-end px-[5%]
                font-semibold text-xl rounded'>
                    <span className='px-2 py-[2px] hover:bg-slate-50 rounded-full cursor-pointer'
                        onClick={(e) => setShowMenu(!showMenu)}>
                            {
                                showMenu && <i class="fa-solid fa-xmark"></i>
                            }
                    </span>
            </div>
                {   
                    showMenu
                    &&
                    <div className='w-full flex flex-col justify-around items-center h-3/5'>
                        <div className='w-full h-[40px] flex justify-center items-center text-lg font-semibold 
                            text-slate-400 hover:text-slate-600 hover:underline cursor-pointer'
                        >
                            Solution
                        </div>
                        <div className='w-full h-[40px] flex justify-center items-center text-lg font-semibold 
                            text-slate-400 hover:text-slate-600 hover:underline cursor-pointer'
                        >
                            Resource
                        </div>
                        <div className='w-full h-[40px] flex justify-center items-center text-lg font-semibold 
                            text-slate-400 hover:text-slate-600 hover:underline cursor-pointer'
                        >
                            Contact Us
                        </div>
                        <div className='w-full h-[40px] flex justify-center items-center text-lg font-semibold 
                            text-slate-400 hover:text-slate-600 hover:underline cursor-pointer'
                        >
                            About Us
                        </div>
                        <div className='w-full h-[40px] flex justify-center items-center text-lg font-semibold 
                            text-slate-400 hover:text-slate-600 cursor-pointer'
                        >
                            <button className='py-[2px] px-3 border rounded-full border-black flex items-center hover:bg-[#30A981] hover:text-white hover:border-none'>
                                Login
                            </button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar;