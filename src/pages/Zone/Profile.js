import React from 'react';
import { Profile } from '../../components/My Profile/Profile';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';
function profileIMG(active) {

  return (
    <div>
      <Header/>
      <Profile/>
      <br/>
      <br/>
      <Navbar/>  
     </div>
  );
}
export default profileIMG;