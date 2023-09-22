import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import mobileLogo from '../../public/logo-mobile.svg'
import menuIcon from '../../public/menu-icon.svg'
import closeIcon from '../../public/close-icon.png'
import closeIconBorder from '../../public/close-icon-border.png'
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
            <a href='' className='Inter font-medium text-lg tracking-[-1px]'>Timeline</a>
            <a href='' className='Inter font-medium text-lg tracking-[-1px]'>Overview</a>
            <a href='' className='Inter font-medium text-lg tracking-[-1px]'>FAQs</a>
            <a href='' className='Inter font-medium text-lg tracking-[-1px]'>Contact</a>
        </div>

        <div className='flex justify-start items-center mt-7 pl-16'>
          <button className='relative register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:opacity-80 font-medium'><p className='text-base'>Register</p>
          </button>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
      <div className='fixed w-full top-0 z-30 bg-custom-bg'>
          <div className='flex justify-between items-center max-[280px]:px-8 px-12 pt-9'>
              <Image src={mobileLogo} alt='mobile-logo' className='w-20'></Image>
              <Image onClick={handleNav} src={menuIcon} alt='mobile-logo' className='md:hidden'></Image>
          </div>
          <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-6'></div>
      </div>
    </div>

  )
}

export default Header