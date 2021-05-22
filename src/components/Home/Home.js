import React, { useState } from 'react'
import '../../styles/Home.css';
import {Link, Redirect} from 'react-router-dom';
import BottomSheet from '../Home/BottomSheet';
export const Home = () => {
  const [state] = useState(JSON.parse(localStorage.getItem("data")));

    
    // setState({user : {full_name:'ABC'}});
  return (
    state!== null  ? (
    <div>
      <div className="home">
        <div id='Home'>
        <Link  to="/Zone/Wallet/AddMoney" style={{ textDecoration: 'none' }}>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <h1>
                    iPlay
                    <br/>
                    credits
                   </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Link>
        <button id="Swipe"className="btn-2 btn-block  btn-refer" ><BottomSheet/>
        </button>
        <div>
        <Link to="/Home/Games" style={{ textDecoration: 'none' }}>
        <button className="btn btn-block  btn-large">Start Playing Games</button>
        </Link>
        </div>
      </div>
      </div>
    </div> ) : <Redirect to = "/"/>
  );
}
