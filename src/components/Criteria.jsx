import React from 'react'
import Image from 'next/image'
import criteriaImage from '../../public/criteria-image.png'
import flare from '../../public/criteria-flare.png'
import flare2 from '../../public/criteria-flare2.png'
import star1 from '../../public/criteria-star1.png'
import star2 from '../../public/criteria-star2.png'
import star3 from '../../public/criteria-star3.png'

const Criteria = () => {
  return (
    <div>
      <div className='mt-3 flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto md:mt-24 md:gap-16'>
        {/* IMAGE SECTION */}
        <div className='md:basis-[50%]'>
          <div className='flex justify-center'>
            <Image src={star1} width={130} height={17} alt='star' className='w-[13px] h-[17px] relative right-2'></Image>
          </div>

          <div className='z-10 relative mt-12'>
            <Image src={criteriaImage} width={900} height={600} alt='criteria' className='z-10 relative object-cover bg-center bg-no-repeat w-[90%] md:w-full mx-auto'></Image>
            <Image src={flare} alt='flare' className='md:hidden absolute z-0 top-[1rem] opacity-80' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
            <Image src={star2} width={120} height={14} alt='flare' className='w-[12px] h-[14px] absolute z-0 bottom-[40%] left-[53%]'></Image>
          </div>
        </div>



        {/* TEXT SECTION */}
        <div className='md:basis-[50%] relative z-10 w-[80%] mx-auto md:pr-8'>
          <h1 className='relative text-center clash-display-bold text-2xl tracking-wide'>
          Judging Criteria <br /><span className='text-[#D434FE] clash-display-bold text-2xl'> Key attributes</span>
          </h1>

          <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
            <span className='text-[#FF26B9]'>Innovation and Creativity: </span>
            Evaluate the uniqueness and creativity of the
            solution. Consider whether it addresses a real-world 
            problem in a novel way or introduces innovative features.
          </div>
          <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
            <span className='text-[#FF26B9]'>Functionality: </span>
            Assess how well the solution works. Does it perform 
            its intended functions effectively and without major 
            issues? Judges would consider the completeness and 
            robustness of the solution.
          </div>
          <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
            <span className='text-[#FF26B9]'>Impact and Relevance: </span>
            Determine the potential impact of the solution in the 
            real world. Does it address a significant problem, and 
            is it relevant to the target audience? Judges would assess 
            the potential social, economic, or environmental benefits.
          </div>
          <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
            <span className='text-[#FF26B9]'>Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. 
            Judges would consider the complexity of the code, the 
            use of advanced technologies or algorithms, and the 
            scalability of the solution.
          </div>
          <div className='relative z-10 text-sm text-center font-medium lh-26 mt-5'>
            <span className='text-[#FF26B9] relative z-10'>Adherence to Hackathon Rules: </span>
            Judges will Ensure that the team adhered to the rules 
            and guidelines of the hackathon, including deadlines, 
            use of specific technologies or APIs, and any other 
            competition-specific requirements.
          </div>
          <Image src={flare2} alt='flare' className='md:hidden absolute z-0 bottom-[-9%] right-[-20%] opacity-70' style={{ filter: 'hue-rotate(-14.6deg)' }}></Image>
          <Image src={star3} width={100} height={12} alt='star' className='w-[10px] h-[12px] absolute z-2 right-[8%] mt-7'></Image>
        
          <div className='flex justify-center items-center mt-6'>
            <button className='relative register-button text-xs max-[320px]:px-5 max-[320px]:py-2 px-5 py-2 hover:opacity-80'>
              <p className='text-sm font-normal'>Read More</p>
            </button>
          </div>

        </div>
        {/* END OF TEXT SECTION */}
      </div>
      <div className='h-[0.1px] w-full bg-[rgba(255,255,255,0.18)] mt-16'></div>
    </div>
  )
}

export default Criteria