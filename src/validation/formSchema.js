import * as yup from 'yup'

const formSchema = yup.object().shape({

  name: yup
  .string()
  .min(2, "Name must be at least 2 characters")
  .required("Name is Required"),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], "size is required"),
  sauce: yup
    .string()
    .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinich Alfredo'], "size is required"),
  toppings: yup
    .string()
    .oneOf(['Pepperoni', 'Sausage'], "topping is required"),
  special: yup
    .string()
    .min(0, "special not required")

})



export default formSchema