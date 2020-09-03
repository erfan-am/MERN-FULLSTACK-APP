import React, { useState } from 'react'
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElement/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
const PlaceItem = (props) => {
    const [openModal,setOpenModal]=useState(false)
    const [showConfirmModal,setConfirmModal]=useState(false)
    const openMapHandler=()=>setOpenModal(true);
    const openConfirmModal=()=>setConfirmModal(true);
    const closeConfirmModal=()=>setConfirmModal(false);
    const closeMapHandler=()=>setOpenModal(false);

    const confirmDeleteHandler=()=>{
        console.log('hoooooooooo');
        setConfirmModal(false)
    }
    const {image,title,address,description,coordinates,id}=props.place;
    return (
       <React.Fragment>
        <Modal 
        show={openModal} 
        onCancel={closeMapHandler}
        onClick={openMapHandler} 
        header={address}  
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
            <div className="map-container">
                {/* <Map
                    center={coordinates}
                    zoom={16}
                /> */}
            </div>
        </Modal>
        <Modal onCancel={closeConfirmModal} onClick={openConfirmModal} show={showConfirmModal} header="Are you sure?" footerClass="place-item__modal-actions" footer={
            <React.Fragment>
                <Button inverse onClick={closeConfirmModal}>CANCEL</Button>
                <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            </React.Fragment>
        } >
            <Card>
                <p>Are you Sure?</p>
            </Card>  
        </Modal>
        <li className="place-item">
            <Card>
                <div className="place-item__image">
                    <img src={image} alt={title}/>
                </div>
                <div className="place-item__info">
                    <h2>{title}</h2>
                    <h3>{address}</h3>
                    <p>{description}</p>
                </div>
                <div className="place-item__action">
                    <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                    <Button to={`/places/${id}`}  >EDIT</Button>
                    <Button danger onClick={openConfirmModal}>DELETE</Button>
                </div>
            </Card>    
        </li>
       </React.Fragment>
    )
}

export default PlaceItem
