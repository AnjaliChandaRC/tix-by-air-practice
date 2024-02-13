import { InterestsList } from '@/utils/CreatorsHelper'
import React from 'react'
import InformationMainDropDown from './InformationMainDropDown'
import Heading from '../Heading'

const InformationMainTab = () => {
  return (
    <>
      <div className='pt-8 pb-9'>
        <Heading
          className="flex-col !items-start gap-4 md:flex-row md:!items-center"
          title={"UI/UX"}
          btnTitle={"Manage Community"}
        />
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-10 items-start'>
        <div className='w-full lg:w-2/4'>
          <h2 className='text-black ff_inter text-base font-semibold leading-[100%]'>About</h2>
          <p className='text-shadowgray ff_inter text-sm leading-[150%] max-w-[492px] pt-3'>Unlimited member tracking at no cost. Track impressions, scans, race, gender, geo.</p>
        </div>
        <div className='w-full lg:w-2/4 pt-4 lg:pt-0'>
          <h2 className='text-black ff_inter text-base font-semibold leading-[100%]'>Interests</h2>
          <div className='flex items-center pt-3 flex-wrap gap-[11px]'>
            {InterestsList.map((obj, index) => {
              return (
                <>
                  <button key={index} className='py-2 px-[11px] border border-greige text-shadowgray text-sm ff_inter leading-[100%] rounded-[10px] bg-antiquewhite'>{obj}</button>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div className='pt-10 md:pt-14'>
        <InformationMainDropDown />
      </div>
    </>
  )
}

export default InformationMainTab