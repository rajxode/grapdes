
import React from 'react';
import SingleSlide from './SingleSlide';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        logo:'slider1.png',
        title:'Accreditation & Compliance',
        content:'Bring real-time monitoring for all users accreditation requirements for continuous quality improvement',
    },
    {
        logo:'slider2.png',
        title:'ILMS',
        content:'Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology',
    },
    {
        logo:'slider3.png',
        title:'Exam Management System',
        content:'Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules',
    },{
        logo:'slider1.png',
        title:'Accreditation & Compliance',
        content:'Bring real-time monitoring for all users accreditation requirements for continuous quality improvement',
    },
    {
        logo:'slider2.png',
        title:'National Education Policy',
        content:'Enable the formulation of syllabi as per the NEP guidelines and identify new and diverse categories of courses',
    },{
        logo:'slider3.png',
        title:'Student and Faculty Empowerment',
        content:'Get access to all our value-added and instructor-led certificate courses on the go via our mobile app ',
    },
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,color:"black" , display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

function SliderBar() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
          ]
    }

    return (
        <div className='w-full h-[70vh] py-[10vh] relative px-[7%]'>
            <div className='w-full h-full flex flex-col justify-between'>
                <div className='text-4xl font-bold'>
                    Learn more about <span className='text-[#EA4722]'>what we solve</span>
                </div>

                <div className='w-full px-5'>
                    <Slider {...settings}>
                        {data.map((slide, index) => <SingleSlide key={index} index={index} slide={slide}/>)}
                    </Slider>
                </div>

            </div>
            <div className='absolute bottom-[15] left-[0] z-10'>
                <img src="./main/top.png" alt="image" />
            </div>
        </div>
    )
}

export default SliderBar;