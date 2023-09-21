import React from 'react'
import Image from 'next/image'
import mobileStar1 from '../../public/timeline-mobile-star1.png'
import mobileStar2 from '../../public/timeline-mobile-star2.png'
import mobileStar3 from '../../public/timeline-mobile-star3.png'

const Timeline = () => {
  return (
    <div>
        <div className='mt-20'>
          <div className='font-medium text-center'>
            <h1 className='clash-display-bold text-[20px] lh-26 tracking-wider'>Timeline</h1>
            <div className='w-[95%] mx-auto text-sm max-[300px]:text-xs'><p>Here is the breakdown of the time we</p>
              anticipate using for the upcoming event.</div>
          </div>

          <div className='relative md:hidden'>
            <div className='w-[90%] mx-auto mt-10'>

              <div className='w-[90%] mx-auto mt-16 flex flex-col h-24 relative'>
                <Image src={mobileStar1} width={14} height={16} alt='star mobile' className='absolute top-[-2rem] left-[9.4%]'></Image>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Hackathon Announcement</h3>
                      <p className='mt-2 font-medium'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>1</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto mt-8 flex flex-col h-24'>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Teams Registration begins</h3>
                      <p className='mt-2 font-medium'>Interested teams can now show their interest 
                      in the getlinked tech hackathon 1.0 2023 by 
                      proceeding to register</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>2</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto mt-8 flex flex-col h-24'>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Teams Registration ends</h3>
                      <p className='mt-2 font-medium'>Interested Participants are no longer Allowed
                        to register</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>3</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto mt-8 flex flex-col h-24 relative'>
              <Image src={mobileStar2} width={10} height={12} alt='star mobile' className='absolute top-[-2rem] right-[20%]'></Image>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Announcement of the accepted teams <br /> and ideas</h3>
                      <p className='mt-2 font-medium'>All teams whom idea has been accepted into 
                      getlinked tech hackathon 1.0 2023 are formally 
                      announced</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>4</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto mt-8 flex flex-col h-24'>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Getlinked Hackathon 1.0 Offically Begins</h3>
                      <p className='mt-2 font-medium'>Accepted teams can now proceed to build 
                      their ground breaking skill driven solutions</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>5</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[90%] mx-auto mt-8 flex flex-col h-24 border relative'>
              <Image src={mobileStar3} width={10} height={12} alt='star mobile' className='absolute left-[-1.5rem] bottom-[-3rem]'></Image>
                <div className='flex flex-row h-full'>
                  <div className='h-[77px] w-[2px] bg-[#D434FE]'></div>
                  <div className='flex flex-col text-xs max-[350px]:text-[11px] max-[280px]:text-[9px]'>
                    <div className='h-[77px] pl-5'>
                      <h3 className='text-[#D434FE] font-semibold'>Demo Day</h3>
                      <p className='mt-2 font-medium'>Teams get the opportunity to pitch their 
                      projects to judges. The winner of the 
                      hackathon will also be announced on this day</p>
                    </div>

                    <div className='mt-3 h-[19.32px] w-full flex flex-row'>
                      <div className='relative left-[-0.6rem] w-[19.32px] h-[19.32px] rounded-full shadow-md bg-[#D434FE] timeline-circle flex justify-center items-center font-bold'>6</div>
                      <div className='text-[#D434FE] flex items-center font-semibold'>
                      November 18, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* END MOBILE TIMELINE DISPLAY */}
        </div>
    </div>
  )
}

export default Timeline