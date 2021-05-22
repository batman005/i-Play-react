import React from 'react';
import { Zone }  from '../../components/My Zone/Zone';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';

function ZoneIMG(active) {

  return (
    <div>
      <Header/>
      <Zone/>  
      <br/>
      <br/>
      <Navbar/>  
     </div>
  );
}
export default ZoneIMG;