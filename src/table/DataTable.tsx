import * as React from 'react';

type DataTableProps = {
    header: string
};

const DataTable = ({ header }: DataTableProps) => {

    return (
        <h1>{header}</h1>
    );
}

export default DataTable;