import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drOpen,setDrOpen]=useState(false);
    const openDr=()=>{
        setDrOpen(true)
    }
    const closeDr=()=>{
        setDrOpen(false)
    }
  return (
    <React.Fragment>
    {drOpen && <Backdrop onClick={closeDr}/>}
     <SideDrawer show={drOpen} onClick={closeDr}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer> 
      <MainHeader>
        <button onClick={openDr} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
