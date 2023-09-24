"use client"
import axios from "axios";
import { TailSpin } from 'react-loader-spinner'
import { useState, useEffect } from "react";
import Image from "next/image";
import image2 from '../../../public/register-image-desktop.png'
import registerMove from '../../../public/register-move.svg'
import registerMoveImage from '../../../public/register-move-mobile.svg'
import mobileLogo from '../../../public/logo-mobile.svg'
import RegisterModal from "@/components/RegisterModal";
import { useModal } from "@/context/ModalContext";

const Register = () => {
  const { openModal } = useModal();
  const [teamName, setTeamName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedOptionInteger, setSelectedOptionInteger] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        setCategoryOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category options:", error);
      });
  }, []);

  // convert to integer
  useEffect(() => {
    const integerOption = parseInt(selectedOption);
    setSelectedOptionInteger(isNaN(integerOption) ? null : integerOption);
  }, [selectedOption]);


  const numericOptions = [
    { label: 'Select', value: '' },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleNumericSelectChange = (e) => {
    setSelectedNumber(e.target.value);
  };
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);      
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters

    if (numericValue.length <= 11) {
      setPhone(numericValue);
    }
  };

  const handleRegistration = () => {
    setIsLoading(true); 
    if (selectedOptionInteger !== null) {
      const registrationData = {
        email,
        phone_number: phone,
        team_name: teamName,
        group_size: parseInt(selectedNumber),
        project_topic: topic,
        category: selectedOptionInteger,
        privacy_poclicy_accepted: isAgreed,
        date_created: new Date().toISOString(),
        last_updated: new Date().toISOString(),
      };
  
      // Send the POST request
      axios
        .post("https://backend.getlinked.ai/hackathon/registration", registrationData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // Response handling
          console.log("Registration successful:");
          openModal()
          setIsLoading(false);
          setTeamName('');
          setPhone('');
          setEmail('');
          setTopic('');
          setSelectedOption('');
          setSelectedNumber('');
          setIsAgreed(false);
        })
        .catch((error) => {
          console.error("Error registering:", error);
          setError(true);
          setIsLoading(false);
        });
    } else {
      console.error("Invalid selectedOptionInteger value.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error === true) {
      const timeout = setTimeout(() => {
        setError(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [error]);


  const isSubmitDisabled = !isAgreed || teamName ==='' || phone === '' || 
  email === '' || topic === '' || selectedOption === '' || selectedNumber === '';

  return (
    <div className="bg-custom-bg text-white w-full'">

        <div className='md:hidden flex justify-start items-center px-16 pt-9'>
          <p className="relative z-10 font-semibold clash-display text-[#D434FE] text-lg">Register</p>
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
                <button className='relative bg-none bg-transparent border rounded px-8 py-[0.7rem] hover:bg-transparent font-medium'><p className='text-base'>Register</p>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/*  */}

      <div className="flex flex-col md:flex-row w-[90%] mx-auto md:w-[90%] md:justify-between md:items-center md:pb-16">
        {/* ist col */}
        <div className="md:basis-[40%] md:mt-40">
          <div className="md:hidden flex justify-center items-center">
          <Image width={195} height={155} src={image2} alt="register"></Image>
          </div>
         <Image className="hidden md:inline-block relative" src={image2} alt="register"></Image>
        </div>

        {/* 2nd col */}
        <div className="md:p-10 mt-8 md:mt-40 ml-4 md:bg-[rgba(255,255,255,0.03)] md:input-shadow md:basis-[60%] md:rounded-xl">
          <p className="hidden md:inline-block relative z-10 font-semibold clash-display text-[#D434FE] text-2xl">Register</p>

          <div className="">
            <Image src={registerMove} alt="register" className="hidden md:inline-block w-auto h-auto"></Image>
            <Image src={registerMoveImage} alt="register" className="md:hidden w-auto h-auto object-cover"></Image>
          </div>
          <h2 className="text-xl md:text-2xl mt-2 md:mt-3">CREATE YOUR ACCOUNT</h2>

          <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h2 className="md:text-sm font-medium">Team's Name</h2>
                <input value={teamName} onChange={handleTeamNameChange} className="text-sm mt-1 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white/30 px-6 py-3 outline-none" type="text" required name="teamName" id="teamName" placeholder="Enter the name of your group" />
              </div>
              <div className="flex flex-col">
                <h2 className="md:text-sm font-medium">Phone</h2>
                <input value={phone} onChange={handlePhoneNumberChange} className="text-sm mt-1 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white/30 px-6 py-3 outline-none" type="tel" maxLength={11} required name="phoneRegister" id="phoneRegister" placeholder="Enter your phone number" />
              </div>
              <div className="flex flex-col">
                <h2 className="md:text-sm font-medium">Email</h2>
                <input value={email} onChange={handleEmailChange} className="text-white text-sm mt-1 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white/30 px-6 py-3 outline-none" type="email" required name="emailRegister" id="emailRegister" placeholder="Enter your email address" />
                {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
              </div>
              <div className="flex flex-col">
                <h2 className="md:text-sm font-medium">Project Topic</h2>
                <input value={topic} onChange={handleTopicChange} className="text-sm mt-1 w-[95%] bg-[rgba(255,255,255,0.03)] input-shadow border rounded placeholder-white/30 px-6 py-3 outline-none" type="text" required name="topic" id="topic" placeholder="What is your group project topic" />
              </div>
          </div>

          <div className="mt-4 flex flex-row items-center gap-2 md:gap-4">
              <div className="w-[70%] md:w-[50%]">
                <div className="flex flex-col">
                  <h2 className="md:text-sm font-medium max-[360px]:text-xs">Category</h2>
                  {/* start dropdown */}
                  <select
                    onChange={handleSelectChange}
                    value={selectedOption}
                    className="block w-full px-1 md:px-5 py-2 mt-2 text-sm bg-none bg-transparent border rounded-lg shadow-md focus:outline-none"
                  >
                    <option value="">Select your category</option>
                    {categoryOptions.map((option) => (
                      <option
                        className="bg-transparent text-black font-medium"
                        key={option.id}
                        value={option.id}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                  {/* end dropdown */}
                </div>
              </div>
              <div className="w-[30%] md:w-[50%]">
                <div className="flex flex-col">
                  <h2 className="md:text-sm font-medium max-[360px]:text-xs">Group Size</h2>
                   {/* start dropdown */}
                   <select
                    onChange={handleNumericSelectChange}
                    value={selectedNumber}
                    className="block w-full px-1 md:px-5 py-2 mt-2 text-sm bg-none bg-transparent border rounded-lg shadow-md focus:outline-none"
                  >
                    {numericOptions.map((option) => (
                      <option className="bg-transparent text-black" disabled={option.value === ''} key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {/* end dropdown */}
                </div>
              </div>
          </div>

          <p className="text-[10px] md:text-sm text-[#D434FE] mt-4 italic font-medium">Please review your registration details before submitting</p>

          {/* Checkbox for agreeing to T&C */}
          <div className="flex items-center mt-4 bg-none bg-transparent">
            <input
              type="checkbox"
              id="agreeCheckbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2 accent-[#D434FE]"
            />
            <label htmlFor="agreeCheckbox" className="text-[10px] md:text-sm">
              I agreed with the event terms and conditions  and privacy policy
            </label>
          </div>
          
          <div className='flex justify-center items-center mt-6 md:mt-8 mb-8 md:mb-5'>
            <button type="submit" className={`relative md:w-full border border-transparent register-button max-[320px]:px-9 max-[320px]:py-3 px-12 py-[0.9rem] hover:bg-none hover:border hover:border-white hover:register-hover ${
            isSubmitDisabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isSubmitDisabled}
              onClick={handleRegistration}
            >
              <div className='text-sm md:hidden'>
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
                  
                  ) : (
                    'Submit'
                  )}
              </div>
              <div className='text-sm md:flex md:justify-center md:items-center hidden '>
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
                  
                  ) : (
                    'Register Now'
                  )}
              </div>
            </button>
           </div>
           {error && <div className="text-red-500 relative text-center">Something went wrong!</div>}

        </div>
      </div>

    <RegisterModal />
    </div>
  )
}

export default Register