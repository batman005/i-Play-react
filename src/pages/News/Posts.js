import React from 'react';
import { Post } from '../../components/News/Post';
import { Navbar } from '../../Layout/Footer/footer';
import { Header } from '../../Layout/Header/header';
function PostIMG() {
  return (
    <div>
      <Header/>
      <Post/>
      <Navbar/>  
     </div>
  );
}
export default PostIMG;
