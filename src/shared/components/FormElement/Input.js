import React,{useReducer,useEffect} from 'react'
import './Input.css';
import {validate} from '../../util/validators';
import { INPUT__CHANGE ,TOUCH_INPUT} from '../../util/actionsTypes';
//Third Step Create Reducer for managing inputStates 
const inputReducer=(state,action)=>{
    switch (action.type) {
        case INPUT__CHANGE:
            return{
                ...state,
                value:action.val,
                //Step Seven create function to manage inputs validadte
                isValid:validate(action.val,action.validators)
            }
        case TOUCH_INPUT:
            return {
                ...state,
                isTouched:true
            }
        default:
            return state;
    }
};

const Input = (props) => {

    const INTIAL_STATE={
        value:props.initailValue || '',
        isValid:props.initailIsValid || false
    }
    
    //Fourth step create variable  for use reducer 
    const [inputState,dispatch]=
    useReducer(inputReducer,INTIAL_STATE);

    const {id,onInput}=props;
    const {value,isValid}=inputState;
    
     //Step eight 
    useEffect(()=>{
        onInput(id,value,isValid);
    },[id,value,isValid,onInput]);

    //Second Step ChangeHandler
    const changeHandler=(e)=>{
        dispatch({type:INPUT__CHANGE,isTouched:false,val:e.target.value,validators:props.validators,})
        e.preventDefault()
     }; 

     const touchHandler=()=>{
         dispatch({type:TOUCH_INPUT})
     };

     //First step create funtion that create textarea or input
    const element=props.element === 'input' ?
     (<input id={props.id} 
     value={inputState.value} 
     type={props.type} 
     placeholder={props.placeholder} 
     onChange={changeHandler}
     //Step six create funtion to make errorText after touched  input without valid txt
     onBlur={touchHandler}
      /> ): (<textarea 
      onBlur={touchHandler}  
      id={props.id} 
      rows={props.rows || 3 } 
      value={inputState.value} 
      onChange={changeHandler} />);
       
    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched &&  'form-control--invalid' }`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {
            //Step five create errorText 
            !inputState.isValid && inputState.isTouched && <p>{props.errorText}</p> 
            }
        </div>
    )
}

export default Input
