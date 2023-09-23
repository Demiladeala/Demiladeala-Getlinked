import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import mobileLogo from '../../public/logo-mobile.svg'
import menuIcon from '../../public/menu-icon.svg'
import closeIconBorder from '../../public/close-icon-border.svg'
import { MdClose} from 'react-icons/md'

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  const closeNav = () => {
    setNav(false);
  }

  return (
    <div>
      <AnimatePresence>
      {nav && 
      (
      <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 70, duration: 0.3 }}
       className='md:hidden fixed z-40 bg-[#150E28] nav-blur rounded-lg w-full h-screen'>
        <div className='flex justify-end items-center max-[280px]:px-8 px-12 pt-9'>
          <div onClick={closeNav} className='relative cursor-pointer w-[25px] h-[25px]'>
            <Image src={closeIconBorder} alt='close' className='w-full h-full object-cover bg-center bg-no-repeat'></Image>
            <MdClose className='w-full absolute top-[0.1rem] text-white font-black' size={20}/>
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-20 pl-16 Inter'>
            <a onClick={handleNav} href='/#timeline' className='Inter w-32 font-medium text-lg tracking-[-1px] hover:text-[#D434FE] hover:text-opacity-80'>Timeline</a>
            <a onClick={handleNav} href='/#introduction' className='Inter w-32 font-medium text-lg tracking-[-1px] hover:text-[#D434FE] hover:text-opacity-80'>Overview</a>
            <a onClick={handleNav} href='/#faq' className='Inter w-32 font-medium text-lg tracking-[-1px] hover:text-[#D434FE] hover:text-opacity-80'>FAQs</a>
            <a onClick={handleNav} href='/contact' className='Inter w-24 font-medium text-lg tracking-[-1px] hover:text-[#D434FE] hover:text-opacity-80'>Contact</a>
        </div>

        <div className='flex justify-start items-center mt-7 pl-16' onClick={handleNav}>
        <a href="/register">
          <button className='relative register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:opacity-80 font-medium'><p className='text-base'>Register</p>
          </button>
          </a>
        </div>
      </motion.div>
      )}
      </AnimatePresence>

      <div className='fixed w-full top-0 z-30 bg-custom-bg md:pt-2'>
        <div className='md:flex flex-row justify-between items-center md:pt-4 px-12 md:px-8 lg:px-20'>
          <div className='flex justify-between items-center max-[280px]:px-8 pt-9 md:pt-0'>
            <Image src={mobileLogo} alt='mobile-logo' className=' w-[5.5rem] sm:w-24 md:w-28 lg:w-28'></Image>
            <Image onClick={handleNav} src={menuIcon} alt='mobile-logo' className='md:hidden cursor-pointer'></Image>
          </div>

          <div className='hidden md:flex flex-row gap-6 items-center'>
            <a href='/#timeline' className='font-medium text-sm lg:text-base hover:text-[#D434FE] hover:text-opacity-80'>Timeline</a>
            <a href='/#introduction' className='font-medium text-sm lg:text-base hover:text-[#D434FE] hover:text-opacity-80'>Overview</a>
            <a href='/#faq' className='font-medium text-sm lg:text-base hover:text-[#D434FE] hover:text-opacity-80'>FAQs</a>
            <a href='/contact' className='font-medium text-sm lg:text-base hover:text-[#D434FE] hover:text-opacity-80'>Contact</a>

            <div className='pl-16 lg:pl-32'>
              <a href="/register">
              <button className='relative register-button  px-8 py-[0.7rem] hover:bg-transparent font-medium'><p className='text-base'>Register</p>
              </button>
              </a>
            </div>
          </div>
        </div>
          <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-6'></div>
      </div>
    </div>

  )
}

export default Header