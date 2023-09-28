import React from 'react'
import Image from 'next/image'
import mobileLogo from '../../public/logo-mobile.svg'
import instagram from '../../public/instagram.png'
import x from '../../public/x.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import phone from '../../public/phone.png'
import { MdLocationOn } from 'react-icons/md'
import mobileStar2 from '../../public/timeline-mobile-star2.png'
import star3 from '../../public/footer-star2.png'
import star2 from '../../public/faq-image-star2.png'


const Footer = () => {
  return (
    <div className='bg-[#100B20] mt-28 md:px-16'>
        <div className='flex flex-col md:flex-row md:items-center md:gap-28 pl-12 pt-16 pb-12'>

            <div className='md:basis-[33%] md:h-[25rem] lg:h-[15rem]'>
            <Image src={mobileLogo} alt='mobile-logo' className='w-28'></Image>
            <p className='relative text-sm font-medium lh-20 mt-4 pr-8'>
            Getlinked Tech Hackathon is a technology
            innovation program established by a group 
            of organizations with the aim of showcasing 
            young and talented individuals in the field 
            of technology
            <Image src={mobileStar2} alt='star' className='absolute top-[22%] left-[-1.2rem] object-cover'></Image>
            </p>
            <div className='flex flex-row items-center gap-2 text-sm font-medium mt-8 pr-8'>
              <p>Terms of Use</p>
              <div className='w-[2px] h-[17px] bg-[#D434FE]'></div>
              <p>Privacy Policy</p>
            </div>

            </div>


            <div className='md:basis-[33%] md:h-[25rem] lg:h-[15rem] relative flex flex-col gap-5 text-sm font-medium mt-9 md:mt-0 pr-8'>
            <Image src={star3} alt='star' className='absolute z-[2] bottom-[44%] left-[35%] object-cover'></Image>
              <h3 className='text-[#D434FE] font-semibold text-[17px]'>Useful Links</h3>
              <p>Overview</p>
              <p>Timeline</p>
              <p>FAQs</p>
              <p>Register</p>
              <div className='flex flex-row items-center gap-2'>
              <p className='text-[#D434FE]'>Follow us</p>
              <div className='flex gap-3 items-center'>
                <Image src={instagram} alt='instagram' className='w-4'></Image>
                <Image src={x} alt='x' className='w-3'></Image>
                <Image src={facebook} alt='facebook' className='w-[7px]'></Image>
                <Image src={linkedin} alt='linkedin' className='w-4'></Image>
              </div>
              </div>
            </div>



            <div className='md:basis-[33%] md:h-[25rem] lg:h-[15rem] relative flex flex-col gap-5 text-sm font-medium mt-9 md:mt-0 pr-8'>
            <Image src={mobileStar2} alt='star' className='absolute top-[40%] right-[25%] object-cover'></Image>
            <Image src={star2} alt='star' className='absolute bottom-[-1.5rem] left-[25%] object-cover'></Image>
              <h3 className='text-[#D434FE] font-semibold text-[17px]'>Contact Us</h3>
              <div className='flex flex-row items-center gap-4'>
                <Image src={phone} alt='phone'></Image>
                <p>+234 6707653444</p>
              </div>

              <div className='flex flex-row items-start gap-4'>
                <MdLocationOn  className='mt-[1px]'/>
                <p>
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
                </p>
              </div>
            </div>

        </div>
          <div className='text-center pr-12 pb-12 mt-4'>
            <p className='font-medium text-xs w-[95%] mx-auto text-center'>All rights reserved. © ALA OLUWADEMILADE JOSHUA.</p>
          </div>
    </div>
  )
}

export default Footer
