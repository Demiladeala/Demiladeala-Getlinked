import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/mobile-hero.png'
import heroarrowImage from '../../public/hero-arrow.svg'
import chain from '../../public/chain.png'
import spark from '../../public/spark.png'
import star1 from '../../public/mobile-hero-star1.png'
import star2 from '../../public/mobile-hero-star2.png'
import star3 from '../../public/mobile-hero-star3.png'
import bulb from '../../public/mobile-hero-bulb.png'
import flare from '../../public/hero-purple-flare.png'

const Hero = () => {
  return (
    <div className='mt-[4.7rem]'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='relative md:basis-[47%]'>
            <div
            className="hero-flare absolute opacity-[0.8] z-0 blur-[4px]"
            style={{
                background: `url(${flare}), lightgray -184.527px 3.278px / 146.745% 105.327% no-repeat`,
                backgroundBlendMode: 'hard-light',
                filter: 'hue-rotate(-18.6deg)',
            }}
            >
            <Image src={flare} alt="Flare" />
            </div>
                <div className=''>
                    <h3 className='italic font-bold text-base text-center mt-8'>Igniting a Revolution in  
                        <div className='relative inline-block'>&nbsp; HR Innovation
                            <Image src={heroarrowImage} alt='arrow' className='absolute left-2'></Image>
                        </div>
                    </h3>

                    <h1 style={{ mixBlendMode: 'normal' }} className='relative z-10 text-center mt-[4rem]'>
                        <div className='relative font-bold text-[32px] max-[280px]:text-2xl'>
                            <div className='inline-block clash-display-bold relative'>getlinked 
                            <Image src={star1} alt='star' width={10} height={12} className='absolute top-[-1.3rem] max-[280px]:top-[-1.4rem] left-[30%] object-cover bg-no-repeat bg-center'></Image>
                            </div>

                            <div className='inline-block clash-display-bold relative'>&nbsp;Tech
                            <Image src={bulb} alt='bulb' width={18} height={26} className='absolute top-[-0.7rem] max-[280px]:top-[-1.2rem] left-[60%] object-cover bg-no-repeat bg-center'></Image>
                            <Image src={star2} alt='star' width={6} height={8} className='absolute top-[-1.8rem] max-[280px]:top-[-2.0rem] right-[-0.9rem] object-cover bg-no-repeat bg-center'></Image>
                            </div>
                        </div>
                        <div className='flex items-center justify-center font-bold text-[32px] max-[280px]:text-2xl'>
                            <p className='clash-display-bold'>Hackathon <span className='clash-display-bold text-[#D434FE]'>1.0</span></p>
                            <Image src={chain} alt='arrow' width={32.797} height={32.797} className='object-cover bg-no-repeat bg-center'></Image>
                            <Image src={spark} alt='arrow' width={22.119} height={22.119} className='object-cover bg-no-repeat bg-center'></Image>
                        </div>
                    </h1>

                    <div className='relative z-10  text-center mt-1 text-[13px] max-[320px]:w-[90%] mx-auto font-normal line-height'>
                        <div className=''>Participate in getlinked tech Hackathon </div>
                        2023 stand a chance to win a Big prize
                     </div>

                     <div className='flex justify-center items-center mt-6'>
                        <button className='relative register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:opacity-90'><p className='text-base'>Register</p>
                        <Image src={star3} alt='star' width={6} height={8} className='absolute top-[50%] right-[-1.7rem] max-[320px]:right-[1.2rem] object-cover bg-no-repeat bg-center'></Image>
                        </button>
                     </div>

                     <div className='flex justify-center items-center mt-4'>
                        <div className='w-[70%] mx-auto text-5xl Unica lh-63 flex gap-4 justify-center items-center'>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>H</sub></div>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>M</sub></div>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>S</sub></div>
                        </div>
                     </div>
                </div>
            </div>



            {/* MOBILE HERO IMAGE SECTION */}
            <div className='mt-4 md:basis-[47%]'>
                <Image src={heroImage} alt='Hackathon Guy' width={2000} height={324} className=''></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero