import React from "react";


export default function OrderComplete({pizza}) {
  const topp = Object.keys(pizza.toppings)


  return(
    <div>  
      <div>{pizza.name}</div>
      <div>{pizza.size}</div>
      <div>{pizza.special}</div>
      <div>
        {topp.forEach(top => {
          if (pizza.toppings[top] === true) {
            debugger
            return(
              <div>{top}</div>
            )
          }
          
        })}
      </div>
    </div>
  )
}