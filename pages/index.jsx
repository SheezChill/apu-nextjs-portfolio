import dynamic from 'next/dynamic'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import EmailSection from '../components/EmailSection'
import Footer from '../components/Footer'
import AchievementsSection from '../components/AchievementsSection'

//Server: not found error handler
const HeroSection = dynamic(() => import('../components/HeroSection'), { ssr: false })

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Projects />
        <h1 id="designs" className="text-4xl font-semibold mb-8">
          My Designs
        </h1>
        <div className="flex flex-row gap-5 flex-wrap">
          <img
            src="/designs/morgan.webp"
            alt="design 1"
            className="w-[22vw] h-[32vw]  object-cover rounded-xl"
          />
          <img
            src="/designs/surtr.webp"
            alt="design 1"
            className="w-[22vw] h-[32vw] object-cover  rounded-xl"
          />
          <img
            src="/designs/suisei.webp"
            alt="design 1"
            className="w-[22vw] h-[32vw] object-cover rounded-xl"
          />
          <img
            src="/designs/rabbit.webp"
            alt="design 1"
            className="w-[22vw] h-[32vw] object-cover rounded-xl"
          />
          <img
            src="/designs/strawberry.webp"
            alt="design 1"
            className="w-[22vw] h-[32vw] object-cover rounded-xl"
          />
        </div>
        <EmailSection />
      </main>
      <Footer />
    </div>
  )
}
