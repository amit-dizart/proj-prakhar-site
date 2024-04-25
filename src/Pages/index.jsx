import React from 'react'
import Header from '../Components/Header'
import './index.css'
import logo from '../assets/logo.png';
import ScrollDown from '../Components/Swipedown';
import image from '../assets/Functions-of-a-Consulting-Company.webp'
import { services } from '../JSON/services';
export default function Pages() {
  return (
    <div
      className='bg-[#242124]'
    >
      {/* <Header /> */}
      <div className='welcomeSection'>
        <div
          className='flex flex-col justify-center items-center gap'
        >
          <div
            className='text-[30px] welcomeText sm:text-[60px]'
          > Welcome  to</div>
          <div

          >
            <img
              className='w-[140px] mt-[-30px]'
              src={logo} alt="" />
          </div>

          <div
            className='mt-[-10px] '
          >
            Trusted Demand Generation Partner
          </div>

        </div>
        <div
          className='scrollDown'
        >
          <div
            className='welcomeText mb-[55px]'
          >
            Swipe Down
          </div>
          <ScrollDown />
        </div>
      </div>


      <div
        className='aboutUsSection p-2 sm:p-0 mb-12'
      >
        <div
          className='text-[30px] welcomeText sm:text-[40px] mb-3 '
        >
          About Us
        </div>

        <div
          className='flex flex-col md:flex-row md:justify-center items-center gap-5 '
        >
          <div
            className='md:w-[50%]'
          >
            <img
              style={{
                borderRadius: '18% 82% 11% 89% / 65% 16% 84% 35%',
              }}
              className='shadow-2xl md:w-[90%]'
              src={image} alt="" />
          </div>

          <div
            className='md:w-[40%] text-justify'
          >
            Welcome to ASOC, your premier destination for transformative managed sales service outsourcing solutions.
            At ASOC, we specialize in revolutionizing the way businesses approach sales, providing comprehensive outsourcing services that empower organizations to optimize revenue & drive sustainable growth.
            With a deep understanding of the intricacies of sales process across various industries, we pride ourselves on delivering tailored solutions that are strategically designed to meet the unique needs and objectives of each client. Whether you're a burgeoning startup or an established enterprise, we are dedicated to unlocking your full sales potential and propelling your business towards unparalleled success
            At ASOC, we are more than just a service provider – we are your trusted partner in success. With our dedicated team by your side, you can rest assured that your sales operations are in capable hands, allowing you to focus on what you do best – growing your business.
            Join us on a journey of innovation and transformation, and discover the limitless possibilities that await when you harness the power of managed sales service outsourcing with ASOC. Together, let's redefine the future of sales and unlock new opportunities for growth and prosperity.
          </div>
        </div>
      </div>


      <div
        className='aboutUsSection p-2 sm:p-0  mb-12'
      >

        <div
          className='text-[30px] welcomeText sm:text-[40px] mb-3 '
        >
          Our Offerings
        </div>

        <div
          className='flex flex-row justify-between md:justify-center gap-5 overflow-scroll md:overflow-auto w-[90%]'
        >
          {
            services.map((item) => {
              return (
                <>
                  <div
                    className='card flex flex-col justify-start gap-5 p-3'>
                    <div className='welcomeText text-[20px]'>
                      {item?.name}
                    </div>

                    <div className='text-[15px] text-justify'>
                    {item?.desc}
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}
