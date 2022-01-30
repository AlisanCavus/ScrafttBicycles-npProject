import React from 'react';
import { useAuth } from '../Contexts/AuthContext';


function Profile() {

const { currentUser } = useAuth()



  return <div className=" h-screen bg-primary">
     <div className=' z-50 absolute'> {currentUser?.email} </div>
  </div>;
}

export default Profile;
