import Image from 'next/image'
import React from 'react'
import { HeroLine } from '../icons/Landing'

const Hero = () => {
  return (
    <div className='container mx-auto px-6'>
      <div className='flex items-center flex-col lg:flex-row justify-between'>
        <div className='max-w-[586px]'>
          <p className='ff_inter text-eerieblack text-base font-semibold leading-[150%] mb-[10px]'>Welcome To TixByAir</p>
          <h1 className='text-smokyblack ff_satoshi_black text-[40px] lg:text-5xl xl:text-textXXl leading-[120%]'>Instantly Track <span className='inline-block'>Your Community</span> Engagement!</h1>
          <p className='text-darkgray text-base leading-[150%] ff_inter mt-4' >See who showed up. View analytics, create tickets, and track who's supporting you the most.</p>
        </div>
        <div className='relative'>
          <Image src='/assets/images/png/hero-img.png' alt='Hero Image' width={504} height={471} />
          <div className='absolute bottom-[45px] right-[115px]'>
            <HeroLine />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero