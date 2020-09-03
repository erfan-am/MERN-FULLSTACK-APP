import React,{ useCallback, useReducer }  from 'react';
import { SET_DATA_INPUT_HOOK,CHANGE_DATA_INPUT_HOOK } from "../util/actionsTypes"; 
export const formReducer=(state,action)=>{
    switch (action.type) {
      case CHANGE_DATA_INPUT_HOOK:
        let formIsValid=true;
        for (let inputId in state.inputs){
          if(inputId === action.inputId){
              formIsValid=formIsValid && action.isValid;
          }else{
            formIsValid =formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs:{
            ...state.inputs,
            [action.inputId]:{value:action.value,isValid:action.isValid}
          },
          isValid:formIsValid
        }
      case SET_DATA_INPUT_HOOK:
        return{
          ...state,
          inputs:action.inputs,
          isValid:action.formIsValid
        }
      default:
        return state;
    }
  } 
export const useForm=(initialInputs,initialFormValidity)=>{
    const [formState,dispatch]= useReducer(formReducer,{
        inputs:initialInputs,
        isValid:initialFormValidity
      });
      
  const inputHandler=useCallback((id,value,isValid)=>{
    dispatch({type:CHANGE_DATA_INPUT_HOOK,value:value,isValid:isValid,inputId:id})
  },[]);
  const setFormData=useCallback((inputData,formValidity)=>{
      dispatch({
        type:SET_DATA_INPUT_HOOK,
        inputs:inputData,
        formIsValid:formValidity
      })
  },[])
  return [formState,inputHandler,setFormData]
}