import React from 'react';
import { NewID } from '../../components/Games/New';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';

function matchIMG() {
  return (
      <div>
      <Header/>
      <NewID/>  
      <Navbar/>  
     </div>
  );
}
export default matchIMG;