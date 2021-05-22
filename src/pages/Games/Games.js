import React from 'react';
import { Game } from '../../components/Games/Games';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';

function GamesIMG() {
  return (
      <div>
      <Header/>
      <Game/>  
      <Navbar/>  
     </div>
  );
}
export default GamesIMG;