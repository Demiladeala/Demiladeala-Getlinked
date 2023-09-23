import React from 'react'
import Image from 'next/image'
import star1 from '../../public/faq-image-star2.png'
import mobileStar2 from '../../public/timeline-mobile-star2.png'
import flare from '../../public/partner-flare1.png'
import flare2 from '../../public/partner-flare2.png'
import logo1 from '../../public/partner-logo1.png'
import logo2 from '../../public/partner-logo2.png'
import logo3 from '../../public/partner-logo3.png'
import logo4 from '../../public/partner-logo4.png'
import logo5 from '../../public/partner-logo5.png'
import logo6 from '../../public/partner-logo6.png'

const Partners = () => {
  return (
    <div>
      <div>
        <div className='relative font-medium text-center mt-10'>
        <Image src={flare} alt='flare' className='absolute z-0 top-[-7rem] left-[-2rem] opacity-90' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
          <h1 className='relative z-10 clash-display-bold text-2xl lh-26 w-[95%] mx-auto tracking-wider'>Partners and Sponsors</h1>
          <div className='relative z-10 w-[85%] font-medium mx-auto text-sm max-[300px]:text-xs mt-3'>
          Getlinked Hackathon 1.0 is honored to have the
          following major <br className='hidden md:block' /> companies as its partners and 
          sponsors
           </div>
        </div>

        <div className='relative z-10 border border-[#D434FE] mt-16 py-7 px-9 md:px-20 md:py-36 rounded-md w-[85%] md:w-[90%] mx-auto grid grid-cols-3 grid-rows-2 gap-3 '>
              <Image src={flare2} alt='flare' className='absolute z-0 top-[5.5rem] right-[-20%] opacity-70 blur-[5px]' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
              <Image src={star1} alt='star' className='absolute left-[5%] object-cover'></Image>
              <Image src={mobileStar2} alt='star' className='absolute bottom-[0.2rem] right-[12%] object-cover'></Image>
              <div className='relative z-10 w-[100%] h-[45px] md:h-[70px] flex justify-center items-center'>
                <div className='h-full w-[2px] bg-[#D434FE] absolute right-0'></div>
                <div className='h-[2px] w-[90%] md:w-[98%] bg-[#D434FE] absolute bottom-[-0.2rem] right-2'></div>
                <Image src={logo1} alt='logo' width={1000} className='w-[90%] md:w-full md:mb-4 h-[40px] object-contain bg-center bg-no-repeat mx-auto'></Image>
              </div>
              <div className='relative w-[100%] h-[45px] md:h-[70px] flex justify-center items-center'>
                <div className='h-full w-[2px] bg-[#D434FE] absolute right-0'></div>
                <div className='h-[2px] w-[98%] md:w-[98%] bg-[#D434FE] absolute bottom-[-0.2rem] right-2'></div>
                <Image src={logo2} alt='logo' width={1000} className='w-[100%] md:p-5 md:mb-4 h-full object-contain bg-center bg-no-repeat mx-auto mr-4'></Image>
                <Image src={star1} alt='star' className='absolute bottom-2 right-[20%] object-cover'></Image>
              </div>
              <div className='relative w-[100%] h-[45px] md:h-[70px]'>
                <div className='h-[2px] w-[98%] md:w-[98%] bg-[#D434FE] absolute bottom-[-0.2rem] right-2'></div>
                <Image src={logo3} alt='logo' width={1000} className='w-[100%] h-[40px] object-contain bg-center bg-no-repeat mx-auto mr-4'></Image>
              </div>

              <div className='relative w-[100%] h-[45px] md:h-[70px]'>
              <div className='h-full w-[2px] bg-[#D434FE] absolute right-0'></div>
              <Image src={logo4} alt='logo' width={1000} className='w-[90%] md:mt-4  md:w-full h-[40px] object-contain bg-center bg-no-repeat mx-auto mr-4'></Image>
              </div>
              <div className='relative w-[100%] h-[45px] md:h-[70px]'>
              <div className='h-full w-[2px] bg-[#D434FE] absolute right-0'></div>
              <Image src={logo5} alt='logo' width={1000} className='w-[90%] md:p-1 md:mt-4 h-[40px] object-contain bg-center bg-no-repeat mx-auto mr-4'></Image>
              </div>
              <div className='relative w-[100%] h-[45px] md:h-[70px]'>
              <Image src={logo6} alt='logo' width={1000} className='relative z-10 w-[100%] md:p-1 md:mt-4 h-[40px] object-contain bg-center bg-no-repeat mx-auto mr-4'></Image>
              </div>
        </div>
      </div>

      <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-28'></div>
    </div>
  )
}

export default Partners