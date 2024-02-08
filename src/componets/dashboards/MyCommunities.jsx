import React from 'react'
import CustomButton from '../common/button/CustomButton'
import Image from 'next/image'

const MyCommunities = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="h-[80px] w-full bg-white border-b-2">
            </div>
            <div className="w-full  min-h-[calc(100vh-80px)] p-5 md:p-6">
                <div className="min-h-[calc(100vh-128px)] border-[1px] rounded-2xl bg-whitesmoke xl:flex items-center justify-center sm:px-12 ps-3 pe-4">
                    <div className="flex items-center justify-center flex-col xl:flex-row">
                        <div>
                            <h2 className="text-black ff_satoshi_black text-2xl lg:text-[28px] !leading-[150%] xl:max-w-[380px]  pt-4 xl:pt-0">There is currently no Community created by you</h2>
                            <div className=" sm:max-w-[270px] mt-4 mx-auto xl:mx-0">
                                <CustomButton title="Create New Community" />
                            </div>
                        </div>
                        <div className="mt-14 xl:mt-0">
                            <Image src='/assets/images/png/my_communities_front_img.png' width={704} height={470} alt="my-communities" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCommunities