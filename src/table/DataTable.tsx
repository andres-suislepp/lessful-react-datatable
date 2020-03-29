import React, { FunctionComponent } from 'react';
import { Header } from './Header';
import Pagination from './Pagination';

type RowMapperFunction = (row: any) => FunctionComponent

type TableStateChangeFunction = (state: TableState) => void

export type TableState = {
    page: number,
    pagination: number
}

type DataTableProps = {
    className?: string,
    rows: Array<any>,
    rowMapper: RowMapperFunction,
    headers?: Array<Header>,
    paginationOptions?: Array<number>,
    state?: TableState,
    onStateChange: TableStateChangeFunction
};

const getPageNumbers = (rows: Array<any>, pagination: number): Array<number> =>
    [...Array(Math.round((rows.length / pagination) + 0.499))];

const DataTable = ({ className, rows, rowMapper, headers, paginationOptions, state = { page: 0, pagination: 10 }, onStateChange }: DataTableProps) => (
    <table className={className}>
        {headers &&
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>
                            {header.label}
                        </th>
                    ))}
                </tr>
            </thead>
        }
        <tbody>
            {rows.slice(state.page * state.pagination, (1 + state.page) * state.pagination)
                .map(rowMapper)}
        </tbody>
        {paginationOptions &&
            <tfoot>
                <tr>
                    <td colSpan={headers ? headers.length : 1}>
                        <Pagination
                            pagination={state.pagination}
                            options={paginationOptions}
                            onChange={(pagination, page) => onStateChange({ ...state, pagination, page })}
                            page={state.page}
                            pages={getPageNumbers(rows, state.pagination)} />
                    </td>
                </tr>
            </tfoot>
        }
    </table>
);


export default DataTable;