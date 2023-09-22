import React from 'react'
import Image from 'next/image'
import faqStar from '../../public/faq-star.png'
import faqImage from '../../public/faq-image.png'
import star1 from '../../public/faq-image-star1.png'
import star2 from '../../public/faq-image-star2.png'
import star3 from '../../public/faq-image-star3.png'
import star4 from '../../public/faq-image-star4.png'
import qm1 from '../../public/faq-image-qm1.png'
import qm2 from '../../public/faq-image-qm2.png'
import qm3 from '../../public/faq-image-qm3.png'

const Faq = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
          {/* FAQ MESSAGE SECTION */}
          <div className='mt-16'>
            <h1 className='relative text-center clash-display-bold text-2xl tracking-wide'>
            Frequently Asked <br /><span className='text-[#D434FE] clash-display-bold text-2xl'> Question</span>
            <Image src={faqStar} alt='star' width={100} className='w-[18px] h-[22px] absolute top-[-1.4rem] left-[8%]'></Image>
            </h1>

            <div className='w-[80%] mx-auto mt-5'>
              <div className='text-[12px] text-center font-medium lh-26'>
                <div>We got answers to the questions that you might</div>
                want to ask about <span className='font-semibold'>getlinked Hackathon 1.0</span>
              </div>

              <div className='mt-9'>
                <p className='text-xs font-medium'>Can I work on a project I started before the hackathon?</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>

              <div className='mt-4'>
                <p className='text-xs font-medium'>What happens if I need help during the hackathon?</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>

              <div className='mt-4'>
                <p className='w-[85%] mr-auto text-xs font-medium'>What happens if I don't have an idea for a project?</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>

              <div className='mt-4'>
                <p className='w-[85%] mr-auto text-xs font-medium'>Can I join a team or do I have to come with one?</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>

              <div className='mt-4'>
                <p className='w-[80%] mr-auto text-xs font-medium'>What happens after the hackathon ends</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>

              <div className='mt-4'>
                <p className='w-[90%] mr-auto text-xs font-medium'>Can I work on a project I started before the hackathon?</p>
                <div className='relative mt-3 bg-[#D434FE] w-full h-px'>
                  <p className='text-2xl font-medium text-[#D334FE] absolute right-0 top-[-1.8rem]'>+</p>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ IMAGE SECTION */}
          <div className='relative mt-20 w-[90%] mx-auto'>
            <div className='absolute w-full'>
              <Image src={qm1} alt='question' className='absolute left-[16%] top-[-0.3rem] max-[350px]:top-[-0.5rem]'></Image>
              <Image src={qm2} alt='question' className='absolute top-[-1.6rem] left-[33%]'></Image>
              <Image src={star1} alt='star Image' width={100} height={10} className='w-[10px] h-[10px] absolute top-[-0.3rem] left-[46%]'></Image>
              <Image src={qm3} alt='question' className='absolute right-[35%] top-[-0.3rem] max-[350px]:top-[-0.5rem]'></Image>
            </div>
            <div className='absolute w-full top-[30%]'>
            <Image src={star2} alt='star Image' width={100} height={9} className='w-[7px] h-[9px] absolute left-[20%]'></Image>
            </div>
            <div className='absolute w-full top-[50%]'>
            <Image src={star3} alt='star Image' width={100} height={9} className='w-[10px] h-[12px] absolute  left-[10%]'></Image>
            </div>
            <Image src={faqImage} alt='FAQ'></Image>
            <div className='absolute w-full bottom-[2%]'>
            <Image src={star4} width={100} alt='star Image' height={20} className='w-[16px] h-[20px]  absolute  right-[20%]'></Image>
            </div>
          </div>
          {/* END FAQ SECTION */}
      </div>

      <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-14'></div>
    </div>
  )
}

export default Faq