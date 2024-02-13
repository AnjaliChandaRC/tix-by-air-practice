import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { ViewLinkIcon } from '../common/icons/InformationIcos'
import { ViewList } from '@/utils/CreatorsHelper'

const InformationMainDropDown = () => {
    const [viewactiveindex, setViewactiveindex] = useState(null)
    const viewhandleClick = (index) => {
        setViewactiveindex(viewactiveindex === index ? null : index);
    }
    return (
        <div className='flex flex-col items-start gap-4 w-full'>
            {ViewList.map((item, index) => (
                <div className='w-full' key={item.id}>
                    <h2 className='text-base font-semibold leading-[100%] ff_inter text-black pb-3'>Links</h2>
                    <div onClick={() => viewhandleClick(index)} className='rounded-lg border border-[#A4A4A4] bg-[#EAEAEA] px-5 pt-5 cursor-pointer'>
                        <div className='flex items-center justify-between pb-5'>
                            <p>{item.link}</p>
                            <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 ease-linear ${viewactiveindex === index ? "rotate-180" : ""}`} />
                        </div>
                        <div className={`transition-max-height overflow-hidden duration-300  ${viewactiveindex === index ? "max-h-96 mt-[6px] mb-[30px]" : "max-h-0"}`}>
                            <Link href="#" className='flex items-center gap-[5px] text-smokyblack ff_inter font-semibold leading-[100%] text-base bg-orangecrayola justify-center rounded-lg py-[10px] border border-black '>
                                View Link <ViewLinkIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InformationMainDropDown