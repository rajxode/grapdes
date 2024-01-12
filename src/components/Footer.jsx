
import React from 'react';

const resources = ['Resource','Solutions','About Us'];

const socialIcons = [
  'facebook',
  'instagram',
  'twitter',
  'linkedin',
];


function Footer() {
  
  return (
    <div className='w-full min-h-[60vh] py-[10vh] bg-[#F8F7F7] flex flex-col justify-between px-[7%]'>
      <div className='w-full h-[60px] mb-4 md:mb-0'>
        <img src="./main/logo.png" alt="logo" />
      </div>
      
      <div className='w-full flex justify-between md:justify-start items-start flex-wrap'>
        <div className='mr-10 h-[110px] flex flex-col justify-between'>
          {
            resources.map((resource) => <div>{resource}</div>)
          }
        </div>

        <div className='mr-10 flex justify-between flex-col h-[110px]'>
          <div className='font-semibold'>Contact Us</div>
          <div className='bg-[#E94724] h-1 w-[100px]'></div>
          <div>
            <div>support@campus.technology</div>
            <div>+91-9980-747-722</div>
          </div>  
        </div>
        
        <div className='flex flex-col justify-between my-4 md:my-0 h-[110px] min-w-[200px]'>
          <div className='font-semibold'>Chat with us</div>
          <div className='bg-[#E94724] h-1 w-[100px]'></div>
          <div className='flex justify-between mt-2'>
            {
              socialIcons.map((icon) => (
                <div>
                  <img src={`./socials/${icon}.png`} alt={icon} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
      <div className='flex justify-between w-full'>
        <div>
          2022, Kahan Technologies Pvt. Ltd.
        </div>
        
        <div>
          Designed by Grapdes
        </div>
      </div>
    </div>
  )
}

export default Footer