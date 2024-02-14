import { myMessagesList, senderMessagesList } from '@/utils/CreatorsHelper'
import Image from 'next/image'
import React from 'react'

const InformationGroupChatTab = () => {
    return (
        <div className='pt-8 '>
            {senderMessagesList.map((obj, index) => {
                return (
                    <div key={index} className='bg-albescentwhite rounded-[0px_16px_16px_16px] w-full max-w-[401px] pt-[15px] px-[9px] pb-[9px] ms-14 relative mt-4'>
                        <Image src={obj.image} width={39} height={39} sizes='100vw' alt='Kristin Watson' className='absolute -left-14 -top-3' />
                        <h2 className='text-black ff_inter text-xs font-medium leading-[100%] pb-[2px]'>{obj.title}</h2>
                        <p className='text-black/70 text-sm leading-[150%] ff_inter'>{obj.description}</p>
                        <p className='text-sm text-black leading-[100%] ff_inter text-end'>{obj.time}</p>
                    </div>
                )
            }
            )}

            <div className='flex flex-col items-end'>
                {myMessagesList.map((obj, index) => {
                    return (
                        <div key={index} className='bg-albescentwhite rounded-[0px_16px_16px_16px] w-full max-w-[401px] pt-[15px] px-[9px] pb-[9px] me-14 relative mt-4'>
                            <Image src={obj.image} width={39} height={39} sizes='100vw' alt='Kristin Watson' className='absolute -right-14 -top-3' />
                            <h2 className='text-black ff_inter text-xs font-medium leading-[100%] pb-[2px]'>{obj.title}</h2>
                            <p className='text-black/70 text-sm leading-[150%] ff_inter'>{obj.description}</p>
                            <p className='text-sm text-black leading-[100%] ff_inter text-end'>{obj.time}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default InformationGroupChatTab