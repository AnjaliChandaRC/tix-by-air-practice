// Import React and other necessary modules
import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

// Define the custom table component
const CustomTable = ({ columns, data, tableProps }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (

        <table {...getTableProps()} style={{ width: '100%' }} {...tableProps}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr className=' rounded-tl-xl rounded-tr-xl bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className='text-start text-black whitespace-nowrap ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]'  {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr className=' py-4 px-[22px]' {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td className=' text-start text-black ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]' {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

// Define prop types for the custom table component
CustomTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    tableProps: PropTypes.object,
};

// Define default prop values for the custom table component
CustomTable.defaultProps = {
    tableProps: {},
};
export default CustomTable;