import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/Wallet.css';
export const Wallet = () => { 
    const state = useSelector(state=>state);
    const credits = state.state.data.user.credits;
    return (
        <div id="Wallet">
            <div className="intro">
             <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,color:"black"}}>
                        <h5>iPlay-Credits</h5>
                        <h5>{credits}</h5>
                        <label>Use this credits to play/join matches at iplay Games& Tournaments</label>
            </div>
            <Link to="/Zone/Wallet/AddMoney" style={{ textDecoration: 'none' }}>
            <button className="btn btn-block red btn-large">Add Money to Wallet</button>
            </Link>
            <button className="btn btn-block btn-hello btn-large" href="/">Deposits</button>
        </div>
        </div>
    )
}
