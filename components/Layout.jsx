import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Samuel's portfolio</title>
      </Head>
      <div className="min-h-screen mx-auto ">
        <Navbar />
        <main className=" pl-6 pr-6  md:pl-12 md:pr-12 lg:pr-12 lg:pl-12">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
