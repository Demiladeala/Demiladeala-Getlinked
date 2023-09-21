import React from 'react'
import Image from 'next/image'
import rulesImage from '../../public/rules-image.png'
import flare1 from '../../public/rules-flare1.png'
import flare2 from '../../public/rules-flare2.png'
import star1 from '../../public/rule-star1.png'
import star2 from '../../public/rule-star2.png'
import star3 from '../../public/rule-star3.png'

const Rules = () => {
  return (
    <div className=''>
        <div className='relative flex flex-col md:flex-row-reverse'>
            <div className='relative w-[90%] mx-auto'>
                <div className='relative mt-16'>
                  <Image src={rulesImage} width={9000} height={382} alt='image' className='z-10 relative w-full left-[1rem] bg-center'></Image>
                  <Image src={star1} alt='flare' width={10} height={12} className='absolute z-[2] top-[45%]' ></Image>
                </div>
                <Image src={flare1} alt='flare' className='z-0 brightness-[0.8] absolute top-[-2.5rem] left-[-3rem] blur-[4px] object-cover bg-center bg-no-repeat w-full' 
                style={{ filter: 'hue-rotate(-18.6deg)' }}></Image>
            </div>





            {/* MESSAGE SECTION */}
            <div className='relative z-10 mt-4 md:mt-0 w-[80%] mx-auto'>
                <div className='absolute right-[-20%] top-[-10rem]'>
                <Image src={flare2} alt='flare' className='z-0 brightness-[0.8] blur-[4px]' 
                style={{ filter: 'hue-rotate(-18.6deg)' }}></Image>
                </div>
                <h1 className='relative text-center clash-display-bold text-xl tracking-wide'>
                Rules and <br /><span className='text-[#D434FE] clash-display-bold text-xl'> Guidelines</span>
                <Image src={star2} alt='flare' width={12} height={14} className='absolute z-[2] bottom-[-0.4rem] right-[-0.8rem]' ></Image>
                </h1>

                <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
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
                <div className='absolute bottom-[-1rem] w-full mt-4'>
                  <Image src={star3} alt='small star' width={10} height={12} className='absolute left-[22%]'></Image>
                </div>
            </div>

            <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-12'></div>
        </div>
    </div>
  )
}

export default Rules