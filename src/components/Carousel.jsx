
import React from 'react';

const data = [
  {
    heading:<div>A <span className='text-[#EA4722]'>power-packed solution</span> to streamline all educational and institutional processes.</div>,
    content:'Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.',
    buttonTitle:'Get a Demo',
    image:'header1'
  },
  {
    heading:<div>Enables <span className='text-[#EA4722]'>efficient segregation</span> of tasks</div>,
    content:'Campus Tech presents you with multiple dashboards to review the status of various accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.',
    buttonTitle:'Accreditation & Compliance',
    image:'header2'
  },
  {
    heading:<div>Helps cater to <span className='text-[#EA4722]'>accreditation requirements</span></div>,
    content:'Campus Tech has created an associated full-fledged and robust campus automation software along with a dedicated mobile app for students that can cater to multiple accreditation and compliance requirements.',
    buttonTitle:'Accreditation & Compliance',
    image:'header3'
  },
  {
    heading:<div><span className='text-[#EA4722]'>Live reports</span> and <span className='text-[#EA4722]'>comparative analysis</span> made available</div>,
    content:'Get live reports on data added for multiple accreditations, AI-based alerts for tracking of tasks assigned and completed.',
    buttonTitle:'Exam Management System',
    image:'header4'
  }
]

function Carousel({currentIndex}) {

  return (
    <div className='w-full h-[90%] flex justify-between items-center'>
      <div className="w-full md:w-1/2 lg:w-[45%] h-3/4 flex flex-col justify-around">
        <div className='text-[2.5rem] font-extrabold leading-tight'>
          {data[currentIndex].heading}
        </div>
        <div className='font-semibold'>
          {data[currentIndex].content}
        </div>
        <div>
          <button className='px-4 btn bg-[#30A981] py-2 rounded-full text-white hover:text-[#30A981] hover:bg-white'>
            {data[currentIndex].buttonTitle}
          </button>
        </div>
      </div>
      <div className="hidden md:block w-[45%] h-3/4">
        <img src={`/banner/${data[currentIndex].image}.png`} alt="logo" className='w-auto h-full' />
      </div>
    </div>
  )
}

export default Carousel;

