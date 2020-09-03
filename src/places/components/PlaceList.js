import React from 'react'
import './PlaceList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElement/Button';
const PlaceList = ({items}) => {
  if(items.length ===0){
      return <div className="place-list center">
          <Card>
              <h2>No Places found.Maybe craete one?</h2>
              <Button to="/places/new">Shared Place</Button>
          </Card>
      </div>
  }
  return <ul className="place-list">
            {items.map(place=>(
                <PlaceItem 
                key={place.id} 
                place={place}
                 />))}
   </ul>
}

export default PlaceList
