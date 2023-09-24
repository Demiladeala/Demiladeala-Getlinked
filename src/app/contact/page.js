"use client"
import axios from "axios";
import { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner'
import Image from "next/image";
import mobileLogo from '../../../public/logo-mobile.svg'
import closeIconBorder from '../../../public/close-icon-border.svg'
import { IoIosArrowBack } from 'react-icons/io'
import instagram from '../../../public/instagram.png'
import x from '../../../public/x.png'
import facebook from '../../../public/facebook.png'
import linkedin from '../../../public/linkedin.png'


const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [topic, setTopic] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiSuccess, setApiSuccess] = useState(false);
  const isDesktop = window.innerWidth >= 768;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (error !== null) {
      const timeout = setTimeout(() => {
        setError(null);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [error]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (!validateEmail(email)) {
        setIsLoading(false);
        setError("Invalid email format");
        setTimeout(() => {
          setError(null); 
        }, 2000);
      }
  
      const contactData = {
        email: email ||'none',
        first_name: firstName || 'none',
        teamName: teamName || 'none',
        topic: topic || 'none',
        message: message || 'none',
      };
  
      const response = await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        contactData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Response:", response.data);
          setTeamName('');
          setFirstName('');
          setEmail('');
          setTopic('');
          setMessage('');
          setApiSuccess(true);
          setTimeout(() => {
            setApiSuccess(false);
          }, 2000);
  
          setTimeout(() => {
            setError(null); 
          }, 1000);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className='bg-custom-bg text-white w-full'>
      <div className='md:hidden flex justify-start items-center max-[280px]:px-8 px-12 pt-9'>
        <a href="/">
        <div className='relative cursor-pointer w-[25px] h-[25px]'>
          <Image src={closeIconBorder} alt='close' className='w-full h-full object-cover bg-center bg-no-repeat'></Image>
          <IoIosArrowBack className='w-full absolute top-[0.1rem] text-white font-black' size={20}/>
        </div>
        </a>
      </div>

    {/* DESKTOP  */}
    <div>
      <div className='hidden md:inline-block fixed w-full top-0 z-30 bg-custom-bg md:pt-2 pb-4'>
        <div className='md:flex flex-row justify-between items-center md:pt-4 px-12 md:px-8 lg:px-20'>
          <div className='flex justify-between items-center max-[280px]:px-8 pt-9 md:pt-0'>
            <Image src={mobileLogo} alt='mobile-logo' className=' w-[5.5rem] sm:w-24 md:w-28 lg:w-28'></Image>
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
      </div>
    </div>

    {/*  */}


    <div className="flex flex-col md:flex-row w-[90%] mx-auto md:w-[80%] md:justify-between md:items-center md:pb-16">
      {/* ist col */}
      <div className="hidden md:flex flex-col basis-[50%] gap-4">
        <h3 className="mt-20 clash-display text-2xl font-semibold text-[#D434FE]">Get in touch</h3>
        <div className="flex flex-col gap-3">
          <p className="font-medium">Contact <br/>Information</p>
          <p className="font-medium">
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p className="font-medium">Call Us : 07067981819</p>
          <p className="font-medium">we are open from Monday-Friday <br/>
          08:00am - 05:00pm</p>

          <div className="my-8 hidden md:block">
          <p className="text-left text-sm text-[#D434FE]">
            Share on
          </p>
          <div className=' mt-2 flex gap-3 justify-start items-center'>
                <Image src={instagram} alt='instagram' className='cursor-pointer w-4'></Image>
                <Image src={x} alt='x' className='cursor-pointer w-3'></Image>
                <Image src={facebook} alt='facebook' className='cursor-pointer w-[7px]'></Image>
                <Image src={linkedin} alt='linkedin' className='cursor-pointer w-4'></Image>
              </div>
        </div>
        </div>
      </div>

      {/* 2nd col */}
      <div className="md:p-10 mt-8 md:mt-40 ml-4 md:bg-[rgba(255,255,255,0.03)] md:input-shadow md:basis-[50%] md:rounded-xl">
        <h3 className="relative z-10 font-semibold clash-display text-[#D434FE] text-lg">
        Questions or need <br className="md:hidden"/>
        assistance? <br />
        Let us know about it
        </h3>

        {error && (
            <div className="bg-red-500 text-white p-2 rounded my-4">
              {error}
            </div>
          )}

        <p className="text-sm font-medium mt-8 md:hidden">Email us below to any question related <br /> 
        to our event</p>

       <form>
        <input className="mt-8 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white px-6 py-3 outline-none md:hidden" value={teamName} onChange={handleTeamNameChange} type="text" required name="teamName" id="teamName" placeholder="Team's Name" />
        <input className="mt-8 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white px-6 py-3 outline-none hidden md:block" value={firstName} onChange={handleFirstNameChange} type="text" required name="firstName" id="firstName" placeholder="First Name" />
        <input className="mt-5 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white px-6 py-3 outline-none md:hidden" value={topic} onChange={handleTopicChange} type="text" required name="topic" id="topic" placeholder="Topic" />
        <input className="mt-5 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white px-6 py-3 outline-none" value={email} onChange={handleEmailChange} type="text" required name="email" id="email" placeholder={isDesktop ? 'Mail' : 'Email'} />
        <textarea className="mt-5 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white px-6 pt-3 pb-24 outline-none" value={message} onChange={handleMessageChange} required name="message" id="message" placeholder="Message">

        </textarea>

          <div onClick={handleSubmit} className='flex justify-center items-center mt-6 mb-8'>
            <button type="submit" 
            className={`relative border border-transparent register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:bg-none hover:border hover:border-white hover:register-hover ${apiSuccess ? 'api-success' : ''}`}>
              <div className='text-sm'>
                {isLoading ? (
                    <TailSpin
                    height="30"
                    width="30"
                    color="#e5e7eb"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                  
                  ) : apiSuccess ? (
                    <span className="checkmark">&#10003;</span>
                  ) : (
                    'Submit'
                  )}
              </div>
            </button>
          </div>
          </form>

        <div className="my-8 md:hidden">
          <p className="text-center text-sm text-[#D434FE]">
            Share
          </p>
          <div className=' mt-2 flex gap-3 justify-center items-center'>
                <Image src={instagram} alt='instagram' className='w-4'></Image>
                <Image src={x} alt='x' className='w-3'></Image>
                <Image src={facebook} alt='facebook' className='w-[7px]'></Image>
                <Image src={linkedin} alt='linkedin' className='w-4'></Image>
              </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact