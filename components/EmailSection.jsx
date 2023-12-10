import React from 'react'
import GithubIcon from '../public/github-icon.svg'
import LinkedinIcon from '../public/linkedin-icon.svg'
import InstagramIcon from '../public/instagram-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import GmailIcon from '../public/gmail-icon.svg'

const EmailSection = () => {
  return (
    <main
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative"
      id="contact"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2 ">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
          I'm currently looking for a job, pls email me, I need money. You can also just
          say hi or something in the email I guess.{' '}
        </p>
        <h4 className="pb-3 mt-6">My socials:</h4>
        <div className=" flex flex-row gap-4 mt-6">
          <a
            href="https://github.com/sheezchill"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.instagram.com/yrm.sml/"
            target="blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <Image src={InstagramIcon} />
          </a>
          <a
            href="mailto:4burner@skiff.com"
            target="blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <Image src={GmailIcon} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default EmailSection
