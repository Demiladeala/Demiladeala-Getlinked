"use client"
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


export default function Home() {
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
    </div>
  )
}
