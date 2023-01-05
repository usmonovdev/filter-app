import React, { useState } from 'react';
import Result from './Result';
import Market from './Market';

function Input() {
    const [input, setInput] = useState("");

    const filterItems = () => {
        return Market.filter(e => e.name.toLowerCase().includes(input))
    }

    return (
        <div className='input'>
            <h3>Filter items</h3>
            <input type="text" placeholder='Search...' onChange={(e) => setInput(e.target.value.toLowerCase())} />
            <Result result={filterItems()} />
        </div>
    )
}

export default Input