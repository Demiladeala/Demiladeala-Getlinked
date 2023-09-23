import React from 'react'
import Image from 'next/image'
import star2 from '../../public/faq-image-star2.png'
import mobileStar2 from '../../public/timeline-mobile-star2.png'
import mobileStar3 from '../../public/timeline-mobile-star3.png'
import imageOne from '../../public/reward-image1.png'
import imageTwo from '../../public/reward-image2.png'
import flare from '../../public/criteria-flare.png'
import flare2 from '../../public/criteria-flare2.png'

const Rewards = () => {
  return (
    <div className='pb-20 bg-[#120C23]'>
      <div className='reward-bg-mobile'>
        <div>
            <h1 className='z-10 pt-7 relative text-center clash-display-bold text-2xl tracking-wide'>
              Prizes and <br /><span className='text-[#D434FE] clash-display-bold text-2xl'> Rewards</span>
              <Image src={star2} alt='star' width={50} className='w-[8px] h-[10px] object-cover absolute top-6 left-[15%]'></Image>
              <Image src={star2} alt='star' width={50} className='w-[8px] h-[10px] object-cover absolute bottom-[20%] right-[27%]'></Image>
              </h1>

              <div className='text-[12px] text-center font-medium lh-20 mt-2 w-[95%] mx-auto max-[300px]:text-[10px]'>
                <div className='relative z-10'>Highlight of the prizes or rewards for winners </div>
                and for participants.
              </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto md:gap-1'>
          {/* IMAGE ONE */}
          <div className='basis-[50%] relative z-10'>
          <Image src={flare} alt='flare' className='md:hidden absolute z-0 top-[-7rem] left-[-2rem] opacity-90' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
          <Image src={imageOne} alt='reward one' className='relative z-10 w-[85%] mx-auto mt-16'></Image>
          <Image src={mobileStar2} alt='star' className='absolute bottom-[-1rem] left-[15%] object-cover'></Image>
          </div>
          {/* IMAGE TWO */}
          <div className='basis-[50%] relative z-10'>
          <Image src={flare2} alt='flare' className='md:hidden absolute z-0 top-[-4rem] right-[-20%] opacity-90 blur-[5px]' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
            <Image src={imageTwo} alt='reward one' className='relative z-10 w-[85%] mx-auto mt-20'></Image>
            <Image src={mobileStar2} alt='star' className='absolute top-[30%] right-[10%] object-cover'></Image>
            <Image src={mobileStar3} alt='star' className='absolute bottom-[-3rem] right-[33%] object-cover'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards