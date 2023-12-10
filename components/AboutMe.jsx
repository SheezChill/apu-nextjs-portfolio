import React from 'react'
import { useTransition, useState } from 'react'
import TabButton from './TabButton'

//1d
const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>WEBGL (GLSL)</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Vue.js</li>
        <li>Nuxt</li>
        <li>Svelte</li>
        <li>Solid.js</li>
        <li>Astro</li>
        <li>Python</li>
        <li>Go</li>
        <li>Rust</li>
      </ul>
    )
  },
  {
    title: 'Experiences',
    id: 'experiences',
    content: (
      <ul className="list-disc pl-2">
        <li>Mangadex</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University</li>
      </ul>
    )
  }
]
//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  //1a
  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
        <img
          src="/AboutMe.webp"
          alt="About Me"
          className="h-full object-cover"
          style={{ borderRadius: '25px' }}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            Hi hello me Samuel, just call me Sam. I like making stuff, mainly websites and
            designs. I also like learning and using new tech because they're cool. I'm
            currently one of the people developing the frontend for MangaDex. Right now
            I'm also learning Japanese to better understand the VTubers I watch. I use VIM
            keybinds in vscode btw. No, yellow isn't my favorite color.
          </p>
          <div className="flex flex-row mt-8">
            {/* 1e */}
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange('experiences')}
              active={tab === 'experiences'}
            >
              {' '}
              Experiences{' '}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}
export default AboutMe
