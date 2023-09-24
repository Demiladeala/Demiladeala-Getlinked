import React from 'react'
import { useModal } from '@/context/ModalContext'
import Image from 'next/image'
import SuccessImage from '../../public/register-success.png'
import emoji from '../../public/register-emoji.svg'

const RegisterModal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

    if (!isModalOpen) {
      return null;
    }

  return (
    <>
    {openModal && (<div className='fixed top-0 left-0 w-full h-screen z-50 bg-[#150E28ED] flex justify-center items-center'>
        <div className='w-[85%] sm:w-[60%] md:w-[50%] lg:w-[50%] mx-auto border border-[#D434FE] rounded-md bg-[rgba(255,255,255,0.01)]'>
          <div className='mx-auto mt-5 flex justify-center'>
              <Image src={SuccessImage} alt='success'></Image>
          </div>  
          <h1 className='font-medium text-center max-[340px]:text-sm md:text-2xl'>Congratulations <br />
            you have successfully <br className='md:hidden' /> Registered!
          </h1>

          <div className='text-center mt-3 text-xs'>Yes, it was easy and you did it! <br className='mt-0'/> check your mail box for next step 
            <div className='inline-block mt-0'><Image src={emoji} alt='emoji' className='relative top-[6px] right-[-0.2rem]'></Image></div>
          </div>

          <div className='flex justify-center items-center mt-6 md:mt-8 mb-8'>
            <button onClick={closeModal} type="submit" className='relative w-[85%] border border-transparent register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:bg-none hover:border hover:border-white hover:register-hover'>
              <p className='text-sm flex justify-center items-center '>
                Back
              </p>
            </button>
           </div>
        </div>
    </div>)}
    </>
  )
}

export default RegisterModal