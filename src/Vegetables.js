import React from 'react'

function Vegetables({ vegetables }) {
    return (
        <>
            <h1>Vegetables</h1>
            {vegetables?.map((item) => {
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
            })}</>
    )
}

export default Vegetables