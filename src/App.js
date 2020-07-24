import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

import formSchema from './validation/formSchema'
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import OrderComplete from "./components/OrderComplete";
import PizzaBuilder from "./components/PizzaBuilder";


/*----------------- Itital Values --------------------*/

const initialFormValues = {
  name:'',
  size:'',
  sauce:'',
  toppings:{
    Pepperoni: false,
    Sausage: false,
    Bacon: false,
    Onion: false
  },
  special:'',
  amount: 1 
}
const initialFormErrors = {
  fName:'',
  email:'',
  password:'',
  term:''
}
const initialPizza = [] 
const initialDisabled = true
/*---------------------- App -------------------------*/

function App() {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)   

/*---------------------- Network -------------------------*/

  const postPizza = () => {
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings:{
        Pepperoni:  formValues.toppings.Pepperoni,
        Sausage:  formValues.toppings.Sausage,
        Bacon:  formValues.toppings.Bacon,
        Onion:  formValues.toppings.Onion
      },
      special: formValues.special,
      amount:  formValues.amount 

    }

    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        setPizza([res.data])
        setFormValues(initialFormValues)
        console.log(res.data);
      })
      .catch( err => {console.log(err);})
  }

/*---------------------- Form -------------------------*/

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    
    .validate(value)
      
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked, 
      }
    })
  }
  // useEffect(() => {
  //   formSchema.isValid(formValues).then(valid => {
  //     setDisabled(!valid)
  //   })
  // }, [formValues])
  return (
    <>
      <NavBar/>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <PizzaBuilder 
          values={formValues} 
          disabled={disabled} 
          post={postPizza}
          errors={formErrors} 
          inputChange={inputChange} 
          checkChange={checkboxChange}
          pizza={pizza}
        />
      </Route>

      <Route path="/order">
        <OrderComplete pizza={pizza}/>
      </Route>
    </>
  );
};
export default App;
