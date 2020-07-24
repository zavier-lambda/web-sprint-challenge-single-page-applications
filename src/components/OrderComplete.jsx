import React, {useState, useEffect} from "react";
import Topping from './Topping'


export default function OrderComplete({pizza}) {
  let topper = []
  const topp = Object.keys(pizza.toppings)

useEffect(() => {

}, [])


  return(
    <div>  
      <div>{pizza.name}</div>
      <div>{pizza.size}</div>
      <div>{pizza.special}</div>
      <div>
{
    topp.map(top => {
      debugger
      if (pizza.toppings[top] == true) {
      return (<div>{top}</div>)
      }
      
    })
}
      </div>
    </div>
  )
}