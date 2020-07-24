import React from "react";

import styled from 'styled-components'
import OrderComplete from "./OrderComplete";

const TheForm = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex-wrap:wrap;
  

  .error-cont{
    color: red;
  }
  button{
    margin: 2%; 
    font-family: 'Lobster', cursive;
  }
  .textbox{
    width: 90%;
  }
  .form-text{
    text-align:left;
    background: grey;
  }

`

export default function PizzaBuilder({values, disabled, errors, inputChange, checkChange, post, pizza}) {


  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    post()
  }

  //=================================================================
  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkChange(name, checked)
  }
  //=================================================================

  return (
    <div>
      <div>
        <h1>Build Your Own Pizza</h1>
      </div>
      <TheForm onSubmit={onSubmit}>
        <div>
          <div>
            <span>Name</span>
          </div>
          <input
            type='text'
            name='name'
            value={values.name}
          onChange={onInputChange}
          />
          
          <div className="form-text">
            <span>Choice of Size</span><br />
            <span>Required</span>
          </div>
          <select
            name='size'
            value={values.size}
          onChange={onInputChange}
          >
            <option value=''>Select</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>

          <div className="form-text">
            <span>Choice of Sauce</span><br />
            <span>Required</span>
          </div>
          <label>
            <input
              type='radio'
              id="OR"
              name='sauce'
              value='Original Red'
              checked={values.sauce === 'Original Red'}
              onChange={onInputChange}
            />Original Red
          
        </label>
        <br/>
          <label>
            <input
              type='radio'
              name='sauce'
              value='Garlic Ranch'
              checked={values.sauce === 'Garlic Ranch'}
              onChange={onInputChange}
            />Garlic Ranch
          
        </label>
        <br/>
        <label>
            <input
              type='radio'
              name='sauce'
              value='BBQ Sauce'
              checked={values.sauce === 'BBQ Sauce'}
              onChange={onInputChange}
            />BBQ Sauce
          
        </label>
        <br/>
          <label>
            <input
              type='radio'
              name='sauce'
              value='Spinach Alfredo'
              checked={values.sauce === 'Spinach Alfredo'}
              onChange={onInputChange}
            />Spinach Alfredo
          
        </label>


          <div className="form-text">
            <span>Add Toppings</span><br />
            <span>Choose up to 4</span>
          </div>

 
        </div>


  
        <label>
          <input
            type="checkbox"
            name='Pepperoni'
            checked={values.toppings.Pepperoni === true}
            onChange={onCheckboxChange}
          />Pepperoni
        </label>

        <label>
          <input
            type="checkbox"
            name='Sausage'
            checked={values.toppings.Sausage === true}
            onChange={onCheckboxChange}
          />Sausage
        </label>

        <label>
          <input
            type="checkbox"
            name='Bacon'
            checked={values.toppings.Bacon === true}
            onChange={onCheckboxChange}
          />Bacon
        </label>
        <label>
          <input
            type="checkbox"
            name='Onions'
            checked={values.toppings.Onions === true}
            onChange={onCheckboxChange}
          />Onions
          </label>

        <div className="form-text">
          <span>Special Instructions</span><br />
        </div>
        <input 
          className="textbox"
          type='text'
          name='special'
          value={values.special}
          onChange={onInputChange}
        />

        <div>
        <input type="number" min="1" max="100" value={values.amount}></input>
          <button id="btn" disabled={disabled}>Place Order</button> {/*<button id='submitButton' disabled={disabled} >Submit</button>*/}
        </div>

      <div class="error-cont">
        <p id="name-error">{errors.name}</p>          
        <p id="size-error">{errors.size}</p>          
        <p id="sauce-error">{errors.sauce}</p>
        <p id="toppings-error">{errors.toppings}</p>
      </div>
      {
        pizza.map(p => {
         return <OrderComplete pizza={p}/>
        })
      }
      </TheForm>
    </div >

  )
}







