import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { MouseEventHandler, useRef } from 'react';

// import Header from "../components/Home/Header/Header.tsx"
// import Main from "../components/Home/Main/Main.tsx"


export default function Home() {

  const myRef = React.createRef()
  const executeScroll = () => myRef.current.scrollIntoView()   

  return (
    <div className='font-Montserrat bg-slate-100'>

        <div className='flex justify-between'>

          <h1 className='text-3xl font-bold tracking-wider px-40 py-10 text-slate-700'>
            Tatsat Tech Writing 
          </h1>
          
          <ul className='flex justify-evenly w-[40%] pr-30 py-12 text-emerald-600 text-2xl'>
            <button onClick={executeScroll}>Testimonials</button>
            <button>Sample Work</button>
            <div className='bg-emerald-400 text-neutral-100 p-4 px-8 rounded-lg shadow-xl'>
              <Link href="/contact">Contact</Link>
            </div>
          
          </ul>
        </div>

        <div className='absolute m-16 animate-fadeUp'>

          <Image height={540} width={477} src='/sample.png' className='relative shadow-2xl rounded-md'></Image>
          <img height = {540} width = {477} src = "/Document.png" className='absolute top-32 left-32 rounded-md shadow-2xl'></img>
        
        </div>

        <div className="absolute mt-32 right-32 text-slate-700  w-[45%]">

          <h2 className='text-5xl font-bold pb-4 tracking-wider leading-[72px]'>
            Professional Written Material for <span className='text-blue-700'>   Tech Companies </span> 
          </h2>

          <h3 className='text-2xl tracking-wider leading-8 font-Space-Mono'>
            Take your <span className='text-blue-700 font-bold'> Software </span> to the <span className="text-amber-500 font-bold"> next level </span> with  <span className='text-amber-500 font-bold'>high-end, accurate</span>  documentation and articles</h3>

          <Link href={"/contact"}>
            <button className='border-2 rounded-lg border-emerald-500 text-emerald-500 mt-12 p-4 px-16 text-2xl shadow-xl'>
              Get Your Project Written Today
            </button>
          </Link>

        </div>
      
      <div>
        <h2 className='text-3xl p-12 text-center mt-[900px]'>
          Testimonials
        </h2>

        <div className="grid grid-cols-3 grid-flow-row gap-16 p-16" ref={myRef}>
          <div className='border-2 border-slate-600 p-12 rounded-2xl shadow-2xl'>

            Tatsat learned our Python API SDK code base and thoroughly documented to the proper level of technical detail, professional tone, and according to our requirements. In addition to documenting the code base, he exercised and documented our industry specific use cases that will be used in the customer onboarding process. He also learned and used our preferred documentation tool and then applied the required formatting and content navigation.
            <br></br>
            <br></br>
            Tatsat approached the work with a high level of customer service and completed all deliverables on schedule. He kept us informed on progress and engaged regularly to share work in progress and incorporated our feedback. We recommend Tatsat and plan to engage with him in the future on similar projects.
            
            <br></br>
            <br></br>

            Sincerely,
            Facteus, Inc.
          </div>
        </div>
      </div>

      <div className='absolute right-24 py-24 animate-fadeUp align-middle'>
        <img className = "right-12 ml-auto mr-auto" src="/press.jpeg"></img>
        <Image className='' height = {148.8} width={450} src="/facteus.png"></Image>
      </div>

      <div className="mx-32 text-slate-700 w-[50%] py-32">
        <h2 className='text-5xl font-bold pb-4 tracking-wider leading-[72px]'>
        <span className='text-amber-500'>Trusted</span> by Enterprise-Scale <span className='text-blue-700'>Data Companies</span> and Professional <span className='text-blue-700'>Writing Agencies</span>
        </h2>

        <h3 className='text-2xl tracking-wider leading-8 font-Space-Mono py-12'>
          Reach out via Email or LinkedIn to bring your <span className='text-blue-700'>Tech</span> to the <span className='text-amber-500'>next level</span>.
        </h3>

        <Link href={"/contact"}>
            <button className='border-2 rounded-lg border-emerald-500 text-emerald-500 p-4 px-16 text-2xl shadow-xl'>
              Contact Now
            </button>
          </Link>
      </div>

      

    </div>


  )
}
