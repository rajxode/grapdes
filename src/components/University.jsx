
// section showing list of all the university

import React from 'react';

const colleges = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
];

const stats = [
    {
        number:30,
        text:'Top Institutions',
        color:'bg-[]'
    },
    {
        number:13,
        text:'in A/A+/A++ Tier',
        color:'bg-[]'
    },
    {
        number:3000,
        text:'Faculty Connect',
        color:'bg-[]'
    },
    {
        number:"90,000",
        text:'Students Benefited',
        color:'bg-[]'
    },
]

function University() {
  return (
    <div className='w-full min-h-[75vh] py-[10vh] flex flex-col justify-around relative px-[7%]'>
        {/* heading */}
        <div className='w-full md:w-1/4 text-4xl font-bold'>
            The best in the country <span className='text-[#E94724]'>trust us</span>
        </div>

        {/* show data */}
        <div className='w-full flex justify-around flex-wrap overflow-hidden'>
            {
                stats.map((stat,i) => (
                    <div
                        key={i} 
                        className='min-w-[180px] h-[150px] flex flex-col'
                    >
                        <div className={`text-5xl font-bold ${i % 2 === 0 ? 'text-[#EDAA20]' : 'text-[#30A981]' } `}>
                            {stat.number}
                        </div>
                        <div className='font-semibold'>
                            {stat.text}
                        </div>
                    </div>
                    )
                )
            }
        </div>

        {/* show university image */}
        <div className='w-full hidden md:flex justify-around overflow-hidden'>
            {
                colleges.map((college) => <img src={`./college/${college}`} alt="logo" className='mx-5' />)
            }
        </div>

        {/* bottom red bar */}
        <div className='w-1/2 md:w-1/5 h-3 bg-[#E94724] absolute bottom-0 right-[0]'></div>
    </div>
  )
}

export default University;