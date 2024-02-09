import React from 'react';

const CustomTable = ({ headers, data }) => {
    return (
        <div className='border-[2px] border-mediumgray mb-3 overflow-x-scroll  table_Scroll_bar rounded-xl'>
            <table className='w-full rounded-xl overflow-hidden '>
                <thead>
                    <tr className='bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]' >
                        {headers.map((header, index) => (
                            <th className='text-start text-black whitespace-nowrap ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]' key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr className='rounded-br-xl rounded-bl-xl' key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td className=' text-start py-4 px-[22px]  text-black ff_inter text-sm leading-[100%]' key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;