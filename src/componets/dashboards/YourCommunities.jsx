"use client"
import React from 'react';
import CustomButton from '../common/button/CustomButton';
import CustomTable from '../common/customTable/CustomTable';
import { EditIcon } from '../common/icons/EditIcon';
import { EyeIcon } from '../common/icons/EyeIcon';

const YourCommunities = () => {
    const tableHeaders = ["Community name", "Number of members", "Manage", "View Community"];
    const tableData = [
        ["UI/UX", 12, <div className='flex items-center gap-[6px]'><EditIcon /> Edit</div>, <div className='flex items-center gap-[6px]'><EyeIcon /> View</div>],
        ["Designers", 5, <div className='flex items-center gap-[6px]'><EditIcon /> Edit</div>, <div className='flex items-center gap-[6px]'><EyeIcon /> View</div>],
    ];

    return (
        <div className=" min-h-[calc(100vh-128px)] m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke sm:p-[22px] p-3">
            <div className='flex sm:items-center flex-col sm:flex-row sm:justify-between'>
                <h2 className='text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]'>Your Communities</h2>
                <div className='mt-3 sm:mt-0'>
                    <CustomButton title='Create New Community' />
                </div>
            </div>
            {/* Use the custom table component and pass props */}
            <div className='mt-7 table_Scroll_bar overflow-x-scroll rounded-xl border-[1px] border-mediumgray'>
                <CustomTable headers={tableHeaders} data={tableData} />
            </div>
            <p className='text-graytwo ff_inter text-center text-sm leading-[100%] mt-7'>A list of your Communities</p>
        </div>
    );
};

export default YourCommunities;
