"use client"
import { useState, useEffect } from "react";
import Criteria from "@/components/Criteria";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Partners from "@/components/Partners";
import Policy from "@/components/Policy";
import Rewards from "@/components/Rewards";
import Rules from "@/components/Rules";
import Timeline from "@/components/Timeline";
import Faq from "@/components/Faq";
import { IoIosArrowUp } from 'react-icons/io'


export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <div className="bg-custom-bg text-white overflow-x-hidden">
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
       <Introduction />
      </section>
      <section>
        <Rules />
      </section>
      <section>
        <Criteria />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <Timeline />
      </section>
      <section>
        <Rewards />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Policy />
      </section>
      <section>
       <Footer />
      </section>

      <button
          className='hidden fixed bottom-5 right-7 z-[90] border-none outline-none bg-[#D434FE] p-2 cursor-pointer rounded hover:bg-opacity-90'
          onClick={handleScrollToTop}
          style={{ display: showButton ? 'block' : 'none' }}
        >
          <IoIosArrowUp size={20} className="text-black"/>
      </button>
    </div>
  )
}
