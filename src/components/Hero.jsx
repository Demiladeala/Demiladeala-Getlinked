import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/mobile-hero.png'
import heroarrowImage from '../../public/hero-arrow.svg'
import heroarrowImagedesktop from '../../public/hero-arrow-desktop.svg'
import chain from '../../public/chain.png'
import spark from '../../public/spark.png'
import star1 from '../../public/mobile-hero-star1.png'
import star2 from '../../public/mobile-hero-star2.png'
import star3 from '../../public/mobile-hero-star3.png'
import desktopbulb from '../../public/desktop-hero-bulb.png'
import flare from '../../public/hero-purple-flare.png'

const Hero = () => {
  return (
    <div className='mt-[4.7rem]'>
        <div className='relative flex flex-col md:flex-row md:items-center md:justify-between md:pl-20'>
            <h3 className='hidden md:block italic font-bold lg:text-xl text-center mt-8 absolute top-0 right-8 lg:top-4 lg:right-[10%]'>Igniting a Revolution in  
                <div className='relative inline-block'>&nbsp; HR Innovation
                    <Image src={heroarrowImagedesktop} alt='arrow' className='absolute left-2 object-cover w-full'></Image>
                </div>
            </h3>
            <div className='relative md:basis-[50%]'>
            <div
            className="hero-flare absolute opacity-[0.8] z-0 blur-[4px] md:hidden"
            style={{
                background: `url(${flare}), lightgray -184.527px 3.278px / 146.745% 105.327% no-repeat`,
                backgroundBlendMode: 'hard-light',
                filter: 'hue-rotate(-12.6deg)',
            }}
            >
            <Image src={flare} alt="Flare" />
            </div>
                <div className=''>
                    <h3 className='italic font-bold text-base text-center mt-8 md:hidden'>Igniting a Revolution in  
                        <div className='relative inline-block'>&nbsp; HR Innovation
                            <Image src={heroarrowImage} alt='arrow' className='absolute left-2'></Image>
                        </div>
                    </h3>

                    <h1 style={{ mixBlendMode: 'normal' }} className='relative z-10 text-center mt-24 lg:mt-[4rem] md:text-left'>
                        <div className='relative font-bold text-[32px] max-[280px]:text-2xl md:text-4xl lg:text-7xl'>
                            <div className='inline-block clash-display-bold relative'>getlinked 
                            <Image src={star1} alt='star' className='md:hidden absolute w-[10px] h-[12px] top-[-1.3rem] max-[280px]:top-[-1.4rem] left-[30%] object-cover bg-no-repeat bg-center'></Image>
                            </div>

                            <div className='inline-block clash-display-bold relative'>&nbsp;Tech
                            <Image src={desktopbulb} alt='bulb' className='absolute w-[18px] md:w-[30px] md:h-[40px] md:top-[-1.3rem] h-[26px] top-[-0.7rem] max-[280px]:top-[-1.2rem] left-[60%] object-cover bg-no-repeat bg-center'></Image>
                            <Image src={star2} alt='star' className='md:hidden absolute w-[6px] h-[8px] top-[-1.8rem] max-[280px]:top-[-2.0rem] right-[-0.9rem] object-cover bg-no-repeat bg-center'></Image>
                            </div>
                        </div>
                        <div className='flex items-center justify-center font-bold text-[32px] max-[280px]:text-2xl md:justify-start md:text-4xl lg:text-7xl'>
                            <p className='clash-display-bold'>Hackathon <span className='clash-display-bold text-[#D434FE]'>1.0</span></p>
                            <Image src={chain} alt='arrow' width={100} height={32.797} className='w-[32.797px] h-[32.797px] md:w-[45px] md:h-[45px] object-cover bg-no-repeat bg-center'></Image>
                            <Image src={spark} alt='arrow' width={220} height={22.119} className='w-[22.119px] h-[22.119px] md:w-[35px] md:h-[35px] object-cover bg-no-repeat bg-center'></Image>
                        </div>
                    </h1>

                    <div className='relative z-10  text-center md:text-left mt-1 md:mt-2 text-[13px] md:text-sm max-[320px]:w-[90%] mx-auto font-normal line-height'>
                        <div className='md:hidden'>Participate in getlinked tech Hackathon </div>
                        <div className='md:hidden'>2023 stand a chance to win a Big prize</div>
                        <div className='hidden md:flex'>
                        Participate in getlinked tech Hackathon
                        2023 stand a chance to win a Big prize
                        </div>
                     </div>

                     <div className='flex justify-center items-center mt-6 md:mt-8 md:justify-start'>
                        <a href="/register">
                        <button className='relative register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:opacity-80'><p className='text-base'>Register</p>
                        <Image src={star3} alt='star' width={100} height={8} className='md:hidden w-[6px] h-[8px] absolute top-[50%] right-[-1.7rem] max-[320px]:right-[1.2rem] object-cover bg-no-repeat bg-center'></Image>
                        </button>
                        </a>
                     </div>

                     <div className='flex justify-center items-center mt-4 md:mt-7'>
                        <div className='w-[70%] mx-auto text-5xl Unica lh-63 flex gap-4 justify-center items-center md:justify-start md:w-full'>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>H</sub></div>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>M</sub></div>
                            <div className='Unica'>00<sub className='Unica text-lg top-[-0.08rem]'>S</sub></div>
                        </div>
                     </div>
                </div>
            </div>



            {/* MOBILE HERO IMAGE SECTION */}
            <div className='mt-4 md:hidden'>
                <Image src={heroImage} alt='Hackathon Guy' width={2000} height={324} className='object-cover'></Image>
            </div>
             <div className='md:basis-[50%] hidden md:flex relative top-8 lg:top-20'>
                <Image src={heroImage} alt='Hackathon Guy' width={2000} height={324} className='w-full p-6 pr-0 h-full object-contain bg-center bg-no-repeat'></Image>
            </div>
        </div>

        <div className='hidden md:flex h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-[0rem] lg:mt-[3.5rem]'></div>
    </div>
  )
}

export default Hero