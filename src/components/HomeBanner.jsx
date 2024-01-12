
// top banner 

import React, { useState } from 'react';
import Carousel from './Carousel';

function HomeBanner() {

    const [currentIndex,setCurrentIndex] = useState(0);

    // prev slide
    const handlePrevClick = (e) => {
        if(currentIndex === 0){
            setCurrentIndex(3);
        }
        else{
            setCurrentIndex((prev) => prev - 1);
        }
    }

    // next slide
    const handleNextClick = (e) => {
        if(currentIndex === 3){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex((prev) => prev + 1);
        }
    }

    return (
        <div className='w-full h-[90vh] flex flex-col relative py-[5vh] px-[7%]'>
            {/* Carousel */}
            <Carousel currentIndex={currentIndex} />
            
            {/* circular dots  */}
            <div className='w-full h-[10%] flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <div className={`rounded-full w-[15px] h-[15px] bg-gray-300 mr-2 ${currentIndex === 0 ? 'bg-orange-500' : '' }  `}></div>
                    <div className={`rounded-full w-[15px] h-[15px] bg-gray-300 mr-2 ${currentIndex === 1 ? 'bg-orange-500' : '' }  `}></div>
                    <div className={`rounded-full w-[15px] h-[15px] bg-gray-300 mr-2 ${currentIndex === 2 ? 'bg-orange-500' : '' }  `}></div>
                    <div className={`rounded-full w-[15px] h-[15px] bg-gray-300 mr-2 ${currentIndex === 3 ? 'bg-orange-500' : '' }  `}></div>
                </div>

                {/* next and prev button */}
                <div className='flex justify-between items-center'>
                    <div className='px-[11px] py-1 rounded-full bg-[#D9D9D9] mr-2 cursor-pointer hover:bg-white btn'
                        onClick={handlePrevClick} >
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div className='px-[11px] py-1 rounded-full bg-gray-300 cursor-pointer hover:bg-white btn'
                        onClick={handleNextClick} >
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            {/* bottom yellow bar */}
            <div className='w-1/2 h-3 bg-[#EDAA20] absolute bottom-0 -left-[8%]'></div>
        </div>
    )
}

export default HomeBanner;