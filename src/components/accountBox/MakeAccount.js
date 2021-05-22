import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {acp} from '../../actions/actions';
import {useSelector} from 'react-redux';
import '../../styles/Login.css';
import iplay from '../../assets/logo_white.png'
export function MakeAccount  ()  {
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  const uuid = state.state.regis.uuid
  console.log("uuid : ",uuid);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referid, setRefer] = useState('');
  const [reloading, setReloading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(false);
  const data = {uuid:uuid,full_name: fullname,email: email,password : password,refer_id:referid};

  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.mobile_number===""||data.password===""){
      setReloading(false);
    }
    else{
      submit();
    }
  }

  const submit = () => {
    dispatch(acp(data)).then((res) => {
      if(res===true){
        setResponse(true);
        setReloading(true);
      }
      else{
        setResponse(false);
        setError('already registered email id');
        setReloading(false);
      }
    }).catch((err) => {
      setReloading(false);
    })
    //console.log(state);
  }

  if(reloading===true&&response===true){
  return <Redirect to="/" />
  } 

  else {
  return (
    <div id="container">
      <h2 id="info-text">Login to</h2>
      {error && <div className="card-panel red lighten-2">{error}</div>}
      <img id="logo-white" src= {iplay}alt="logo"></img>
      <div id="form-container">
        <form id="login-form">
          <div className="form-control">
            <label>Full Name</label>
            <input
              type="text" required
              className="form-item"
              placeholder="Provide Your Name"
              onChange={(e)=>setFullname(e.target.value)} />
          </div>

          <div className="form-control">
            <label>Email</label>
            <input
              type="email" required
              className="form-item"
              placeholder="Provide Your Email"
              onChange={(e)=> setEmail(e.target.value)} />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password" required
              className="form-item"
              placeholder="Provide Your Password"
              onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="form-control">
            <label>Refer ID</label>
            <input
              type="text"
              className="form-item"
              placeholder="Provide Refer ID"
              onChange={(e)=>setRefer(e.target.value)} />
          </div>

          <button className="btn" id="login-btn"onClick={handleSubmit}>
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

}