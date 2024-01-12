
// feature section

import React from 'react';

const firstRow = [
    {
        icon:'1.png',
        text:'Simple and easy-to-use interface'
    },
    {
        icon:'2.png',
        text:'AI-based alerts for all activities to be conducted'
    },
    {
        icon:'3.png',
        text:'Build a new culture of compliance and accreditation'
    },
]

const secondRow = [
    {
        icon:'a.png',
        text:'Multi-Institutional dashboard'
    },
    {
        icon:'b.png',
        text:'Track learning behaviour and learning outcomes'
    },
    {
        icon:'c.png',
        text:'Integration with your campus website'
    },
]

function Features() {
    return (
        <div className='w-full min-h-[65vh] py-[10vh] px-[7%] flex flex-col lg:flex-row justify-between items-center bg-[#F8F7F7] relative'>
            <div className='flex flex-col w-full lg:w-1/4 h-3/4 justify-between md:justify-around my-4 md:my-0'>
                
                {/* heading */}
                <div className='text-4xl font-bold'>
                    Why your educational <span className='text-[#EA4722]'>institution needs Campus Tech</span>
                </div>
                {/* button */}
                <div className='mt-2'>
                    <button className='px-3 py-1 bg-[#30A981] text-white rounded-full'>
                        About Us
                    </button>
                </div>
            </div>
            
            <div className='w-full flex justify-between items-center flex-col lg:w-[70%] md:flex-row h-3/4'>
                <div className="flex flex-col w-full lg:w-[40%] h-full justify-around">
                    {/* first row of features */}
                    {
                        firstRow.map((item) => (
                            <div className='w-full h-[60px] flex justify-between'>
                                {/* image */}
                                <div className='w-auto h-full flex justify-center items-center'>
                                    <img src={`./features/${item.icon}`} alt="logo" className='h-auto w-auto' />
                                </div>
                                {/* text content */}
                                <div className='w-4/5'>
                                    {item.text}
                                </div>   
                            </div>
                            )
                        )
                    }
                </div>
                
                <div className="flex flex-col h-full justify-around w-full lg:w-[40%]">
                    {/* second row */}
                {
                        secondRow.map((item) => (
                            <div className='w-full h-[60px] flex justify-between'>
                                {/* image */}
                                <div className='w-auto h-full flex justify-center items-center'>
                                    <img src={`./features/${item.icon}`} alt="logo" className='h-auto w-auto' />
                                </div>
                                {/* text */}
                                <div className='w-4/5'>
                                    {item.text}
                                </div>   
                            </div>
                            )
                        )
                    }
                </div>
            </div>

            {/* semi circle image */}
            <div className='absolute -bottom-[20%] right-[0]'>
                <img src="./main/bottom (1).png" alt="" />
            </div>
        </div>
    )
}

export default Features;