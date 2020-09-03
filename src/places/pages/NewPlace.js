import React from 'react';
import './PlaceForm.css';
import Input from '../../shared/components/FormElement/Input.js';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validatorFunc'; 
import Button from '../../shared/components/FormElement/Button';
import { useForm } from '../../shared/hooks/form-hooks';

const NewPlace = () => {
  const [formState,inputHandler]= useForm({
      title:{
        value:'',
        isValid:false
      },
      description:{
        value:'',
        isValid:false
      },
      address:{
        value:'',
        isValid:false
      }
    },
    false
    )
  
  const plcaeSubmitHandler=e=>{
    e.preventDefault();
    console.log(formState.inputs);
  }
  return <form onSubmit={plcaeSubmitHandler} className="place-form">
    <Input 
      type="text" 
      label="Title" 
      id="title"
      element="input" 
      validators={[VALIDATOR_REQUIRE()]}
      errorText="Please enter a valid title"
      onInput={inputHandler}
    />
     <Input 
     id="description"
      label="Description" 
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please enter a valid description (at least 5 characters)"
      onInput={inputHandler}
    />
    <Input 
      id="address"
      element="input"
      label="Address" 
      validators={[VALIDATOR_REQUIRE()]}
      errorText="Please enter a valid address"
      onInput={inputHandler}
    />
    <Button type="submit" disabled={!formState.isValid} >ADD PLACE</Button>
  </form>
};
export default NewPlace;