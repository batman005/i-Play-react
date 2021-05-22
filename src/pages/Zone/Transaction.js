import React from 'react';
import { Transaction } from '../../components/Transaction/Transaction';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';
import { Tab } from '../../Layout/Tab/Tab';
function TransIMG() {
  return (
    <div>
      <Header/>
      <Tab/>
      <Transaction/>
      <br/>
      <br/>
      <br/>
      <Navbar/>  
     </div>
  );
}
export default TransIMG;