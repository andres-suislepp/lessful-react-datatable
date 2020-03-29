import React from 'react';
import DataTable, { Header } from 'lessful-react-datatable';

const Simple = () => {
    const headers = [
        new Header('Language', true),
        new Header('Popularity', true)
    ]

    const rows = [
        { label: 'Go', logo: 'https://golang.org/lib/godoc/images/go-logo-blue.svg', stars: 100 },
        { label: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png', stars: 200 },
        { label: 'Rust', logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg', stars: 300 }
    ];

    return (
        <DataTable className="table"
            rows={rows}
            rowMapper={({ label, logo, stars }) => (
                <tr key={label}>
                    <td>
                        <div className="logo-cell">
                            <div className="logo"
                                style={{
                                    backgroundImage: `url(${logo})`
                                }}>
                            </div>
                            {label}
                        </div>
                    </td>
                    <td>
                        {stars}
                    </td>
                </tr>
            )}
            headers={headers} />
    )
}

export default Simple;