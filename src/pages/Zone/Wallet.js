import React from 'react';
import { Wallet } from '../../components/Wallet/Wallet';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';
import { Tab } from '../../Layout/Tab/Tab';
function WalletIMG() {
  return (
    <div>
      <Header/>
      <Tab/>
      <Wallet/>
      <Navbar/>  
     </div>
  );
}
export default WalletIMG;