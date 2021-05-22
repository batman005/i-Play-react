import React from 'react';
import { LiveID } from '../../components/Games/Live';
import { Navbar } from '../../Layout/Footer/footer';
import { GameTab } from '../../Layout/GameTab/GameTab';
import { Header } from '../../Layout/Header/header';

function LiveIDIMG() {
  return (
      <div>
      <Header/> 
      <GameTab/>
      <LiveID/> 
      <Navbar/>  
     </div>
  );
}
export default LiveIDIMG;