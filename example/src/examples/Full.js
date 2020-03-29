import React, { useState } from 'react';
import DataTable, { Header } from 'lessful-react-datatable';

const Full = () => {
    const [state, setState] = useState({
        page: 0,
        pagination: 5,
        pageNumber: 0
    })

    const headers = [
        new Header('Language', true),
        new Header('Popularity', true)
    ]

    const rows = [
        { label: 'Go', logo: 'https://golang.org/lib/godoc/images/go-logo-blue.svg', stars: 100 },
        { label: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png', stars: 200 },
        { label: 'Rust', logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg', stars: 300 },
        { label: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', stars: 400 },
        { label: 'TypeScript', logo: 'https://coryrylan.com/assets/images/posts/types/typescript.png', stars: 500 },
        { label: 'C#', logo: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg', stars: 600 },
        { label: 'Java', logo: 'https://f1.pngfuel.com/png/425/99/631/java-logo-programming-language-selenium-computer-software-java-class-file-computer-programming-software-developer-software-framework-png-clip-art.png', stars: 700 },
        { label: 'Rockstar', logo: 'data:image/png;base64,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', stars: 800 }
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
            headers={headers}
            paginationOptions={[5, 10, 15]}
            state={state}
            onStateChange={setState} />
    )
}

export default Full;