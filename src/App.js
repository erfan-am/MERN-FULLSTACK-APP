import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const loggin=useCallback(()=>{
    setIsLoggedIn(true);
  },[]);
  const logout=useCallback(()=>{
    setIsLoggedIn(false)
  },[])
  let routes;
  if(isLoggedIn){
    routes=(
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces/>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace/>
        </Route>
        <Route path="/auth">
          <Auth/>
        </Route>
        <Redirect to="/" />
    </React.Fragment>
    );
  }else{
    routes=(
      <React.Fragment>
        <Route path="/" exact>
            <Users />
        </Route>
        <Route path="/:userId/places" exact>
            <UserPlaces/>
        </Route>
        <Route path="/auth">
              <Auth/>
        </Route>
        <Redirect to="/auth" />
      </React.Fragment>
    )
  }
  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:loggin,logout:logout}}>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
      );
};

export default App;
