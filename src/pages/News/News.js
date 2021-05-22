import React from 'react';
import {News} from '../../components/News/News';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';
function NewsIMG() {
  return (
    <div>
      <Header/>
      <React.StrictMode>
      <News/>  
      <br/>
      <br/>
      <br/>
    </React.StrictMode>
      <Navbar/>  
     </div>
  );
}
export default NewsIMG;
