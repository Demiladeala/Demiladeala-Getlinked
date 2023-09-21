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
            <h1 className='relative text-center clash-display-bold text-xl tracking-wide'>
            Frequently Ask <br /><span className='text-[#D434FE] clash-display-bold text-xl'> Question</span>
            <Image src={faqStar} alt='star' className='absolute top-[-1rem] left-[15%]'></Image>
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
          <div className='mt-20'>
            <div className='border w-full'>

            </div>
            <div className='border w-full'>
    
            </div>
            <div className='border w-full'>
    
            </div>
            <Image src={faqImage} alt='FAQ'></Image>
            <div className='border w-full'>
    
            </div>
          </div>
          {/* END FAQ SECTION */}
      </div>
    </div>
  )
}

export default Faq