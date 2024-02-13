import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { ContentIcon, QrCOdeIcon, ViewLinkIcon } from '../common/icons/InformationIcos'
import { ViewList, contentList, qrsList } from '@/utils/CreatorsHelper'

const InformationMainDropDown = () => {
    const [activeIndices, setActiveIndices] = useState({
        view: null,
        qr: null,
        content: null
    });

    const handleClick = (section, index) => {
        setActiveIndices(prevState => ({
            ...prevState,
            [section]: prevState[section] === index ? null : index
        }));
    };

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3   gap-4'>
            <div className='flex flex-col items-start gap-4 w-full'>
                <h2 className='text-base font-semibold leading-[100%] ff_inter text-black pb-3'>Links</h2>
                {ViewList.map((item, index) => (
                    <div className='w-full' key={item.id}>
                        <div onClick={() => handleClick('view', index)} className='rounded-lg border border-[#A4A4A4] bg-[#EAEAEA] px-4 xl:px-5 pt-5 cursor-pointer'>
                            <div className='flex items-center justify-between pb-5'>
                                <p className='text-black font-medium ff_inter text-base leading-[100%] text-ellipsis lg:max-w-[154px]  xl:max-w-full overflow-hidden'>{item.title}</p>
                                <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 ease-linear ${activeIndices.view === index ? "rotate-180" : ""}`} />
                            </div>
                            <div className={`transition-max-height overflow-hidden duration-300  ${activeIndices.view === index ? "max-h-96 mt-[6px] mb-[30px]" : "max-h-0"}`}>
                                <Link href={item.url} className='flex items-center gap-[5px] text-smokyblack ff_inter font-semibold leading-[100%] text-base bg-orangecrayola justify-center rounded-lg py-[10px] border border-black '>
                                    View Link <ViewLinkIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-start gap-4 w-full'>
                <h2 className='text-base font-semibold leading-[100%] ff_inter text-black pb-3'>QRs</h2>
                {qrsList.map((item, index) => (
                    <div className='w-full' key={item.id}>
                        <div onClick={() => handleClick('qr', index)} className='rounded-lg border border-[#A4A4A4] bg-[#EAEAEA] px-4 xl:px-5 pt-5 cursor-pointer'>
                            <div className='flex items-center justify-between pb-5'>
                                <p className='text-black font-medium ff_inter text-base leading-[100%] '>{item.title}</p>
                                <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 ease-linear ${activeIndices.qr === index ? "rotate-180" : ""}`} />
                            </div>
                            <div className={`transition-max-height overflow-hidden duration-300  ${activeIndices.qr === index ? "max-h-96 mt-[6px] mb-[30px]" : "max-h-0"}`}>
                                <Link href={item.url} className='flex items-center gap-[5px] text-smokyblack ff_inter font-semibold leading-[100%] text-base bg-orangecrayola justify-center rounded-lg py-[10px] border border-black '>
                                    View QR<QrCOdeIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-start gap-4 w-full'>
                <h2 className='text-base font-semibold leading-[100%] ff_inter text-black pb-3'>Content</h2>
                {contentList.map((item, index) => (
                    <div className='w-full' key={item.id}>
                        <div onClick={() => handleClick('content', index)} className='rounded-lg border border-[#A4A4A4] bg-[#EAEAEA] px-4 xl:px-5 pt-5 cursor-pointer'>
                            <div className='flex items-center justify-between pb-5'>
                                <p className='text-black font-medium ff_inter text-base leading-[100%] '>{item.title}</p>
                                <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 ease-linear ${activeIndices.content === index ? "rotate-180" : ""}`} />
                            </div>
                            <div className={`transition-max-height overflow-hidden duration-300  ${activeIndices.content === index ? "max-h-96 mt-[6px] mb-[30px]" : "max-h-0"}`}>
                                <Link href={item.url} className='flex items-center gap-[5px] text-smokyblack ff_inter font-semibold leading-[100%] text-base bg-orangecrayola justify-center rounded-lg py-[10px] border border-black '>
                                    View Content <ContentIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InformationMainDropDown
