"use client"
import React from 'react';
import CustomButton from '../common/button/CustomButton';
import CustomTable from '../common/customTable/CustomTable';
const YourCommunities = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Community name',
                accessor: 'communityName', // Corrected accessor key
            },
            {
                Header: 'Number of members',
                accessor: 'numberOfMembers', // Corrected accessor key
            },
            {
                Header: 'Manage',
                accessor: 'manage',
            },
            {
                Header: 'View Community',
                accessor: 'viewCommunity',
            },
        ],
        []
    );

    const data = React.useMemo(
        () => [
            {
                communityName: 'UI/UX', // Corrected key name
                numberOfMembers: '12', // Corrected key name
                manage: 'Edit',
                viewCommunity: 'View',
            },
            {
                communityName: 'UI/UX', // Corrected key name
                numberOfMembers: '12', // Corrected key name
                manage: 'Edit',
                viewCommunity: 'View',
            },
        ],
        []
    );

    return (
        <div className=" min-h-[calc(100vh-128px)] m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke sm:p-[22px] p-3">
            <div className='flex sm:items-center flex-col sm:flex-row sm:justify-between'>
                <h2 className='text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]'>Your Communities</h2>
                <div className='mt-3 sm:mt-0'>
                <CustomButton title='Create New Community' />
                </div>
            </div>
            {/* Use the custom table component and pass props */}
           <div className='mt-7 pb-3 table_Scroll_bar overflow-x-scroll rounded-xl border-[1px] border-mediumgray'>
           <CustomTable columns={columns} data={data} tableProps={{ className: 'custom-table-class' }} />
           </div>
            <p className='text-graytwo ff_inter text-center text-sm leading-[100%] mt-7'>A list of your Communities</p>
        </div>
    );
};

export default YourCommunities;