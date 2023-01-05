import React from 'react'

function Fruits({ fruits }) {
    console.log(fruits);
    return (
        <>
            <h1>Fruits</h1>
            {fruits?.map((item) => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.price}</th>
                            </tr>
                        </thead>
                    </table>
                )
            })}
        </>
    )
}

export default Fruits