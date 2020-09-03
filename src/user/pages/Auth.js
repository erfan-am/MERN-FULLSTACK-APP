import React, { useState, useContext } from 'react'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElement/Input'
import Button from '../../shared/components/FormElement/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validatorFunc'
import { useForm } from '../../shared/hooks/form-hooks';
import './Auth.css'; 
import { AuthContext } from '../../shared/context/auth-context'

const Auth = () => {
const auth=useContext(AuthContext);
 const [logIn,setLogIn]=useState(true)
 const [formState,inputHandler] =  useForm({
        email:{
            value:'',
            isValiid:true
        },
        password:{
            value:'',
            isValiid:false
        }
    },true);
    const switchModeHandler=()=>{
        setLogIn(prev=>{
            return !prev
        })
    }
    const authSubmitHandler=(e)=>{
        e.preventDefault();
        auth.login();
    }
    return (
        <Card className="authentication">
        <h2>Login Required</h2>
          <form>
            {!logIn && (
                <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Name"
                    placeholder="Enter your complite name"
                    onInput={inputHandler}
                    errorText="Please enter a valid name"
                    validators={[VALIDATOR_REQUIRE()]}
                />
            )}
              <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter a valid email"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Please enter a valid email"
                  element="input"
                  onInput={inputHandler}
              />
              <Input
                  id="password"
                  type="password"
                  label="Password"
                  validators={[VALIDATOR_MINLENGTH()]}
                  errorText="Please enter a valid password"
                  placeholder="Enter your password"
                  element="input"
                  onInput={inputHandler}
              />
              <Button type="submit" onClick={authSubmitHandler} disabled={formState.isValiid} >{logIn ? 'LOGIN' :'SIGNUP'}</Button>
          </form>  
          <Button onClick={switchModeHandler} inverse>SWITCH TO {logIn ? 'SIGNUP' : 'LOGIN'}</Button>
        </Card>
    )
}

export default Auth
