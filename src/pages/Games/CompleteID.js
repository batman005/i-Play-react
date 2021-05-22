import React from 'react';
import { CompleteID } from '../../components/Games/Complete';
import { Navbar } from '../../Layout/Footer/footer';
import { GameTab } from '../../Layout/GameTab/GameTab';
import { Header } from '../../Layout/Header/header';

function CompIDIMG() {
  return (
      <div>
      <Header/> 
      <GameTab/>
      <CompleteID/> 
      <Navbar/>  
     </div>
  );
}
export default CompIDIMG;