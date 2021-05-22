import React from 'react';
import { GameID } from '../../components/Games/GameID';
import { Navbar } from '../../Layout/Footer/footer';
import { GameTab } from '../../Layout/GameTab/GameTab';
import { Header } from '../../Layout/Header/header';

function GamesIDIMG() {
  return (
      <div>
      <Header/> 
      <GameTab/>
      <GameID/> 
      <Navbar/>  
     </div>
  );
}
export default GamesIDIMG;