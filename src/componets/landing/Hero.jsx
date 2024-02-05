import Image from 'next/image'
import React from 'react'
import CustomButton from '../common/button/CustomButton'
const Hero = () => {
  return (
    <div className='relative bg-seashell  min-h-[calc(100vh-80px)] flex justify-center items-center overflow-hidden py-12'>
      <Image src='/assets/images/svg/topleft_line_img.svg' alt='Hero Image' className='top-4 xl:top-20 left-[-35px] absolute h-[20px] md:h-[38px]' width={127} height={38} />
      <Image src='/assets/images/svg/halfcircel.svg' alt='Hero Image' className='w-5 h-5 sm:w-7 sm:h-7 top-20 right-[-5px] absolute ' width={27} height={27} />
      <Image src='/assets/images/svg/fullcircel.svg' alt='Hero Image' className='bottom-0 left-2/4 absolute ' width={27} height={27} />
      <div className='container mx-auto px-6 max-w-[1188px]'>
        <div className='flex items-center flex-col md:flex-row '>
          <div className='max-w-[586px]'>
            <p className='ff_inter text-eerieblack text-base font-semibold !leading-[150%] mb-[10px]'>Welcome To TixByAir</p>
            <h1 className='text-smokyblack  text-[40px] lg:text-[55px] xl:text-textXXl !leading-[120%] ff_satoshi_black'>Instantly Track <span className='inline-block text_border'>Your Community</span> Engagement!</h1>
            <p className='text-darkgray text-base leading-[150%] ff_inter mt-4 max-w-[530px] mb-10' >See who showed up. View analytics, create tickets, and track who's supporting you the most.</p>
            <CustomButton title="create your community" link="/" />
          </div>
          <div className='relative mt-12 sm:mt-14 md:mt-0 md:ms-6 lg:ms-10'>
            <Image src='/assets/images/png/hero-img.png' alt='Hero Image' className='max-w-[296px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-none' width={504} height={471} />
            <Image className='w-[140px] xl:!w-[145px] absolute -top-[5%] left-[-26px] sm:-left-[11px] lg:-top-[4%] lg:left-2 xl:left-10 xl:-top-[2%]' src='/assets/images/svg/heroside_img.svg' alt='Hero line' width={194} height={93} />
            <Image className='w-[140px] xl:!w-[145px] absolute bottom-[10%] -right-[37%] sm:-right-[33%] lg:-right-[27%] xl:-right-[20%] xl:bottom-[11%]' src='/assets/images/svg/heroside_img.svg' alt='Hero line' width={194} height={93} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero