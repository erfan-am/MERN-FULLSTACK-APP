import React, { useEffect, useState } from 'react';
import './PlaceForm.css';
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElement/Input';
import Button from '../../shared/components/FormElement/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validatorFunc';
import { useForm } from '../../shared/hooks/form-hooks';
import Card from '../../shared/components/UIElements/Card';
const DUMMY_PLACES=[
    {
        id: 1,
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
          lat: 40.7484405,
          lng: -73.9878584
        },
        creator: 1
      },
      {
        id: 2,
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
          lat: 40.7484405,
          lng: -73.9878584
        },
        creator: 2
      }
]
const UpdatePlace = () => {
    const [isLoadng,setIsLoading]=useState(true)
    const placeId=useParams().placeId;
    const identifiedPlace=DUMMY_PLACES.find(p=>p.id == placeId);
    console.log(identifiedPlace);
      const [formState,inputHandler,setFormData]= useForm({
        title:{
            value:identifiedPlace.title,
            isValid:false
        },
        description:{
            value:identifiedPlace.description,
            isValid:false
        }
    },false)

    const placeUpdateSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(formState.inputs);
    }
    useEffect(()=>{
        if(!identifiedPlace){

            setFormData({
                title:{
                    value:identifiedPlace.title,
                    isValid:true
                },
                description:{
                    value:identifiedPlace.description,
                    isValid:true
                }
            },true);
        }
        setIsLoading(false)
    },[setFormData,identifiedPlace])
    if(!identifiedPlace){
        return <div>
        <Card>
        <h2>Could not find plcae!</h2>
        </Card>
            
        </div>  
    }
    if(isLoadng){
        return <div className="center">
            <h2>Loading...</h2>
        </div>
    }
    if(!formState.inputs.title.value ){
      return <div className="center">
            <h2>you don't have nothing</h2>
        </div>
    }
    return (
     <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
           <Input  
           id="title" 
           element="input" 
           type="text" 
           label="Title" 
           errorText="Please enter a valid title"
           onInput={inputHandler} 
           initailValue={formState.inputs.title.value}
           initailIsValid={formState.inputs.title.isValid}
           validator={[VALIDATOR_REQUIRE()]} />
             <Input  
           id="description" 
           label="Description" 
           errorText="Please enter a valid description (min 5 characters)"
           onInput={inputHandler} 
           value={formState.inputs.description.value}
           valid={formState.inputs.description.isValid}
           validator={[VALIDATOR_MINLENGTH(5)]} />
           <Button type="submit" disabled={!formState.isValid} >Update Place</Button>
       </form>
    )
}

export default UpdatePlace
