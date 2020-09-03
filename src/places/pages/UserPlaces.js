import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

const DUMMY_PLACES=[
    {
        id:1,
        title:'Empf',
        description:'One of the most famous sky scrapers in the world',
        image:'',
        adress:'20 w 34th St,New yourk ,Ny 11001',
        location:{
            lat:14.5758769,
            lng:-85.587876
        },
        creator:1
    },
    {
        id:2,
        title:'Empf',
        description:'One of the most famous',
        image:'',
        adress:'',
        location:{
            lat:54.5758769,
            lng:-45.587876
        },
        creator:2
    }
]
const UserPlaces = () => {
    const userID =useParams().userId;
    const loadedPlcases=DUMMY_PLACES.filter(pl=>pl.creator == userID)
    return (
       <PlaceList items={loadedPlcases} />
    )
}

export default UserPlaces
