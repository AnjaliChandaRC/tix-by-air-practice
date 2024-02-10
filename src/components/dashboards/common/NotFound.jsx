import React from 'react'
import Image from 'next/image'
import CustomButton from '@/components/common/button/CustomButton';

const NotFound = () => {
  return (
    <div className=" min-h-[calc(100vh-128px)] overflow-hidden overflow-y-scroll scroll_bar_none m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke xl:flex items-center justify-center sm:px-12 ps-3 pe-4 w-full">
      {/* Container for content */}
      <div className="flex items-center justify-center flex-col xl:flex-row">
        {/* Content for no communities */}
        <div>
          {/* Heading for no communities */}
          <h2 className="text-black ff_satoshi_black text-2xl lg:text-[28px] !leading-[150%] xl:max-w-[380px]  pt-4 xl:pt-0">There is currently no Community created by you</h2>
          {/* Button to create new community */}
          <div className=" sm:max-w-[270px] mt-4 mx-auto xl:mx-0">
            <CustomButton title="Create New Community" />
          </div>
        </div>
        {/* Image section */}
        <div className="mt-14 xl:mt-0">
          <Image src='/assets/images/png/my_communities_front_img.png' width={704} height={470} alt="my-communities" />
        </div>
      </div>
    </div>
  )
}

export default NotFound;
