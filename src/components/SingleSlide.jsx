
import React from 'react';

function SingleSlide({slide}) {
    
    return(
        <div className="md:w-[300px] lg:w-[400px] h-[300px] p-4 rounded flex flex-col justify-around
            hover:border border-slate-400 hover:shadow-xl rounded-bl-[3rem]">
            <div>
                <img src={`./sliders/${slide.logo}`} alt="log" />
            </div>
            <div className='font-bold text-[#EA4722]'>
                {slide.title}
            </div>
            <div>
                {slide.content}
            </div>
            <div>
                <button className='px-3 py-1 border border-black rounded-full'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default SingleSlide;