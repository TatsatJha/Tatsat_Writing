import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function contact() {
  return (
    <div className='font-Montserrat h-screen bg-slate-100 text-slate-700'>

        <h1 className='text-3xl font-bold tracking-wider px-40 py-10'>
          <Link href="/">Tatsat Tech Writing</Link> 
        </h1>

        <div className='flex'>

          <h1 className='text-5xl p-16 w-1/2 font-bold tracking-wider leading-[72px]'>
            Get <span className='text-amber-500'>Proven Services</span> for Technical <span className='text-blue-700'>Documentation</span> and <span className='text-blue-700'>Content </span>
          </h1>

          <div className='text-5xl bg-slate-100 border-emerald-500 border-4 w-fit absolute right-40 my-16 p-16 text-emerald-500 rounded-xl shadow-2xl animate-fadeUp'>
            <h2>Set up a Meeting</h2>
            <p className='text-xl py-6 font-Space-Mono'>Email or message me on LinkedIn if you're <br></br> interested in having high end content or <br></br> documentation for your Tech</p>
            <p className='text-xl py-6 font-Space-Mono'>Email: TatsatTarun@gmail.com</p>
            <p className='text-xl py-6 font-Space-Mono'>LinkedIn: <a href='https://www.linkedin.com/in/tatsat-jha' target="_blank" rel="noopener noreferrer">linkedin.com/in/tatsat-jha</a></p>
          </div>

        </div>
    </div>
  )
}

