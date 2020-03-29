import React from 'react';

type PaginationChangeFunction = (value: number, pageNumber: number) => void

type PaginationProps = {
    pagination: number,
    page: number,
    pages: Array<number>,
    options: Array<number>,
    onChange: PaginationChangeFunction
}

const Pagination = ({ pagination, options, onChange, page, pages }: PaginationProps) => {

    return (
        <div className="lfrdt-pagination"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <div>
                <div>
                    {options.map(option => (
                        <a className={`lfrdt-pagination-option${option === pagination ? ' lfrdt-pagination-option--active' : ''}`}
                            onClick={() => onChange(option, page)}>
                            {option}
                        </a>
                    ))}
                </div>
                <div>
                    Showing 1 - {pagination} rows
                </div>
            </div>

            <div>
                <div>
                    {pages.length > 1 &&
                        <React.Fragment>
                            <a className="lfrdt-pagination-option"
                                onClick={() => onChange(pagination, 0)}>
                                <i className="icon angle double left"></i>
                                --
                            </a>
                            <a className="lfrdt-pagination-option"
                                onClick={() => onChange(pagination, page - 1)}>
                                <i className="icon angle left"></i>
                                -
                            </a>
                            <a className="lfrdt-pagination-option lfrdt-pagination-option--active">{page + 1}</a>

                            <a className="lfrdt-pagination-option"
                                onClick={() => onChange(pagination, page + 1)}>
                                <i className="icon angle right"></i>
                                ++
                            </a>
                            <a className="lfrdt-pagination-option"
                                onClick={() => onChange(pagination, pages.length - 1)}>
                                <i className="icon angle double right"></i>
                                ++
                            </a>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Pagination;