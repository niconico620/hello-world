import React from 'react'

function Columns() {
    const items = [{id: 0, title: "Hololive"}, {id: 1, title: "Nijisanji"}]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <td>{item.title}</td>
                    </React.Fragment>
                ))
            }
       
        </React.Fragment>
    )
}

export default Columns
