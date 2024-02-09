import React from 'react';

const CustomTable = ({ headers, data }) => {
    return (
        <table className='w-full '>
            <thead>
                <tr className=' rounded-tl-xl rounded-tr-xl bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]' >
                    {headers.map((header, index) => (
                        <th className='text-start text-black whitespace-nowrap ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]' key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr className=' py-4 px-[22px]' key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td className=' text-start text-black ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]' key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomTable;