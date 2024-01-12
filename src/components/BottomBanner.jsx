
// bottom banner of contact button

import React from 'react'

function BottomBanner() {
  return (
    <div className='w-full h-[35vh] md:h-[75vh] pt-[5vh] flex justify-between items-center overflow-hidden pl-[7%]'>
      <div className='w-full md:w-1/4 h-full flex flex-col justify-around'>
        <div>
        <div className='text-4xl font-bold'>
          Ready to give your <span className='text-[#E94724]'>institution an upgrade?</span>
        </div>
        <div className='mt-[5vh]'>
          <button className='px-3 py-1 bg-[#30A981] rounded-full text-white'>
            Contact Us
          </button>
        </div>
        </div>
      </div>
      <div className='hidden md:flex w-2/5 h-full relative'>
        <div className='w-full h-full absolute bottom-0 right-[0] overflow-hidden rounded-tl-full'>
          <img src="./main/bottom.png" alt="image" className='w-full h-auto' />
        </div>
      </div>
    </div>
  )
}

export default BottomBanner