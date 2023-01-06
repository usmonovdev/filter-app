import React, { useState } from 'react';
import { useEffect } from 'react';
import Market from './Market';
import Result from './Result';

function Input() {
    const [input, setInput] = useState("");
    const [stockCheck, setStockCheck] = useState(false)

    const filterItems = () => {
        return Market.filter(e => e.name.toLowerCase().includes(input))
    }

    useEffect(() => {
        const filterStock = (st) => {
            return st.stocked === true
        }
        if (stockCheck) {
            Market.filter(filterStock);
        } else {
            console.log("xato");
        }
    }, [Market])

    console.log(stockCheck)

    // useEffect(() => {
    //     const filterStock = (st) => {
    //         return st.stocked === true
    //     }
    //     setStock(Market.filter(filterStock))
    // }, [])
    // console.log(stock);

    return (
        <div className='input'>
            <input type="text" placeholder='Search...' onChange={(e) => setInput(e.target.value.toLowerCase())} /> <br />
            <input type="checkbox" id='checkbox' onChange={(e) => setStockCheck(e.target.checked)} />
            <label htmlFor="checkbox">Only show products in stock</label>
            <Result result={filterItems()} />
        </div>
    )
}

export default Input