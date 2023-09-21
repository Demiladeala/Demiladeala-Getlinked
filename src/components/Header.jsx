import React, { useState } from 'react'
import Image from 'next/image'
import mobileLogo from '../../public/logo-mobile.svg'
import menuIcon from '../../public/menu-icon.svg'

const Header = () => {
  return (
    <div className='fixed w-full top-0 z-40 bg-custom-bg'>
        <div className='flex justify-between items-center max-[280px]:px-8 px-12 pt-9'>
            <Image src={mobileLogo} alt='mobile-logo' className='w-20'></Image>
            <Image src={menuIcon} alt='mobile-logo' className='md:hidden'></Image>
        </div>
        <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-6'></div>
    </div>
  )
}

export default Header