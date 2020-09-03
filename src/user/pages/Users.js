import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:1,
      name:'Erfan',
      places:3,
      image:'https://avatars1.githubusercontent.com/u/58808400?s=460&u=dfdf1483489651c0b4ebccb24a9eb38a31ea7d80&v=4'
  },
  {
      id:2,
      name:'Brad',
      places:5,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRahlm51r7GoHgAlMrqDYJYtGdO_hP2HCyvw&usqp=CAU'
  }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
