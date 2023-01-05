import React from 'react'

function Result({ result }) {
  return (
    <>
      {result?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        )
      })}
    </>
  )
}

export default Result