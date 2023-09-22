import React from 'react'
import Image from 'next/image'
import ideaImage from '../../public/idea-image.png'
import introductionArrow from '../../public/introduction-arrow.png'
import introductionStar1 from '../../public/introduction-star1.png'
import introductionStar2 from '../../public/introduction-star2.png'

const Introduction = () => {
  return (
    <div className='mt-9'>
        <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col justify-center items-center'>
                
                <div className='relative w-full'>
                  <div className='w-[80%] mx-auto'>
                    <Image alt='bulb' src={ideaImage} className='mx-auto'></Image>
                  </div>
                  <Image alt='star' src={introductionStar1} width={11} height={13} className='absolute left-[10%] bottom-[59%]'></Image>
                  <Image alt='arrow' src={introductionArrow} width={19.456} height={22.818} className='absolute bottom-[-2rem] left-[46%]'></Image>
                </div>

                <div className='relative mt-16 w-[85%] mx-auto text-center'>
                    <div className='clash-display-bold lh-26 text-xl max-[321px]:text-[17px] font-semibold tracking-wide'>Introduction to getlinked</div>
                    <div className='text-[#D434FE] clash-display-bold lh-26 text-xl max-[321px]:text-[17px] font-semibold tracking-wide'>tech Hackathon 1.0</div>
                    <Image alt='star' width={8} height={10} src={introductionStar2} className='absolute right-[-0.25rem] top-[50%]'></Image>
                </div>
            </div>

            <div className='relative z-10 w-[80%] mx-auto text-sm text-center font-medium lh-26 mt-5'>
              Our tech hackathon is a melting pot of 
              visionaries, and its purpose is as clear as day:
              to shape the future. Whether you're a coding
              genius, a design maverick, or a concept 
              wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world 
              problems, pushing the boundaries of 
              technology, and creating solutions that can 
              change the world, that's what we're all about!
            </div>
            <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-10'></div>
        </div>
    </div>
  )
}

export default Introduction