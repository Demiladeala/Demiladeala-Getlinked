import Image from 'next/image'
import React from 'react'
import listMark from '../../public/policy-list-mark.svg'
import policyImage from '../../public/policy-image.png'
import star1 from '../../public/policy-star1.png'
import star2 from '../../public/policy-star2.png'
import star3 from '../../public/policy-star3.png'
import star4 from '../../public/policy-star4.png'
import Star5 from '../../public/timeline-mobile-star2.png'
import flare from '../../public/partner-flare1.png'

const Policy = () => {
  return (
    <div>
      <div className='relative md:hidden'>
        <h1 className='relative z-10 mt-16 pt-7 text-center clash-display-bold text-2xl tracking-wide'>
        <Image src={star1} alt='star' width={50} className='w-[8px] h-[8px] absolute top-[-0.01rem] right-[24%] object-cover'></Image>
        Privacy Policy and  <br /><span className='text-[#D434FE] clash-display-bold text-2xl'> Terms</span>
        </h1>
        <p className='relative z-10 text-center text-sm text-white text-opacity-75 font-medium mt-2'>Last updated on September 12, 2023</p>
        <p className='relative z-10 w-[85%] mx-auto text-center text-[13px] font-medium mt-8 lh-20'>
        <Image src={star2} alt='star' width={40} className='w-[17px] h-[20px] absolute bottom-[-1rem] object-cover right-[10%]'></Image>
          Below are our privacy & policy, which outline a 
          lot of goodies. <br className='hidden md:block'/> it’s our aim to always take of our 
          participant</p>
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto md:mt-4 md:gap-16'>
        {/* START FIRST COLUMN */}
        <div className='md:basis-[50%]'>
          {/*  */}
            <div className='relative hidden md:block'>
              <h1 className='relative z-10 mt-16 pt-7 w-[85%] mx-auto text-left clash-display-bold text-2xl tracking-wide'>
              <Image src={star1} alt='star' width={50} className='w-[8px] h-[8px] absolute top-[-0.01rem] right-[24%] object-cover'></Image>
              Privacy Policy and  <br /><span className='text-[#D434FE] clash-display-bold text-2xl'> Terms</span>
              </h1>
              <p className='relative z-10 w-[85%] mx-auto text-left text-sm text-white text-opacity-75 font-medium mt-2'>Last updated on September 12, 2023</p>
              <p className='relative z-10 w-[85%] mx-auto text-left text-[13px] font-medium mt-8 lh-20'>
              <Image src={star2} alt='star' width={40} className='w-[17px] h-[20px] absolute bottom-[-1rem] object-cover right-[10%]'></Image>
                Below are our privacy & policy, which outline a 
                lot of goodies. <br className='hidden md:block'/> it’s our aim to always take of our 
                participant</p>
            </div>
          {/*  */}
          <div className='relative z-10 w-[85%] mx-auto bg-[rgba(217,217,217,0.03)] mt-12 border border-[#D434FE] text-sm rounded-md px-4'>
          <Image src={star3} alt='star' className='w-[17px] h-[20px] object-cover absolute z-[2] bottom-[28%] left-[-1.2rem]'></Image>
          <Image src={flare} alt='flare' className='md:hidden  absolute z-0 bottom-[8%] left-[-2rem] opacity-70' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
            <p className='relative z-10 w-[95%] mx-auto text-sm lh-26 font-medium mt-10'>
            At getlinked tech Hackathon 1.0, we 
            value your privacy and are committed 
            to protecting your personal information.
            This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your data 
            when you participate in our tech hackathon 
            event. By participating in our event, you 
            consent to the practices described in this 
            policy.
            </p>

            <h3 className='relative z-10  mt-5 text-[#D434FE] font-bold lh-26'>Licensing Policy</h3>
            <p className='relative z-10  font-bold mt-2'>Here are terms of our Standard License:</p>

            <div className='flex flex-col gap-8 mt-8'>

              <div className='flex flex-row gap-3'>
                <div className='w-[25%] md:w-[10%] h-full'><Image src={listMark} alt='list' className='md:w-24 w-full h-full object-cover p-1 relative z-10'></Image></div>
                <div>
                  <p className='relative z-10  text-sm font-medium'>
                  The Standard License grants you a 
                  non-exclusive right to navigate and 
                  register for our event
                  </p>
                </div>
              </div>

              <div className='flex flex-row gap-3'>
                <div className='w-[25%] md:w-[10%] h-full'><Image src={listMark} alt='list' className='md:w-24 w-full h-full object-cover p-1 relative z-10'></Image></div>
                <div>
                  <p className='relative z-10 text-sm font-medium'>
                  You are licensed to use the item 
                  available at any free source sites, for 
                  your project developement
                  </p>
                </div>
              </div>

              <div className='flex justify-center items-center mt-2 mb-12'>
                <button className='relative register-button text-xs max-[320px]:px-5 max-[320px]:py-2 px-5 py-2 hover:opacity-80'>
                  <p className='text-sm font-normal'>Read More</p>
                </button>
              </div>

            </div>
          </div>
        </div>
        {/* START SECOND COLUMN */}
        <div className='md:basis-[50%] mt-10'>
          <div className='relative policy-image-bg'>
            <div className='absolute top-[7rem] w-full'>
            <Image src={star4} alt='star' className='absolute object-cover z-[2] bottom-[28%] left-[-1.2rem]'></Image>
            <Image src={Star5} alt='star' className='absolute object-cover z-[2] top-0 right-[3rem]'></Image>
            </div>
            <div className='absolute bottom-[-2rem] w-full'>
            <Image src={Star5} alt='star' className='absolute object-cover z-[2] top-0 left-[1.5rem]'></Image>
            <Image src={star1} alt='star' className='absolute object-cover z-[2] top-0 right-[1rem]'></Image>
            </div>
              <Image src={policyImage} alt='policy' className='mx-auto object-cover bg-center bg-no-repeat relative right-4 top-28 mb-20'>
              </Image>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Policy