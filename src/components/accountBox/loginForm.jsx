/*import logical groups */
import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../actions/actions';
import {Link,useHistory} from 'react-router-dom';
// import axios from "axios";
import '../../styles/Login.css';
import iplay from '../../assets/logo_white.png'
export function LoginForm() {
  const dispatch = useDispatch();
  const [mobileno, setMobileno] = useState('');
  const [password, setPassword] = useState('');
  const [reloading, setReloading] = useState(false);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState("");
  const [success,setSuccess]= useState("");
  
  const data = {mobile_number: mobileno, password : password};
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.mobile_number===""||data.password===""){
      setReloading(false);
      history.push("/")
      setError('Failed to log in');
    }
    else{
      submit();
      setError(false);
    }
  }

  const submit = () => {
    dispatch(login(data)).then((res) => {
      if(res===true){
        setResponse(true);
        setSuccess('Success');
        setSuccess(true);
        setReloading(true);
      }
      else{
        setResponse(false);
        setError('Fill the correct password & mobileno');
        setSuccess(false);
      }
    }).catch((err) => {
      setReloading(false);
      setSuccess(false);
    })
    //console.log(state);
  }

  if(reloading===true && response===true){
  return <Redirect to="/Home" />
  } 

  else {
  
  return (
    <div id="container">
    <h2 id="info-text">Login to</h2>
    {error && <div className="card-panel red lighten-2">{error}</div>}
    {success && <div className="card-panel green lighten-2">{success}</div>}
    <img id="logo-white" src= {iplay}alt="logo"></img>
    <div id="form-container">
      <form id="login-form" className="form-group">
        <div className="form-control">
          <label>Mobile Number</label>
          <input
            type="number" required
            className="form-item"
            placeholder="Provide Mobile Number"
            onChange={(e)=>setMobileno(e.target.value)}
            />
           
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password" required
            className="form-item"
            placeholder="Provide Password"
            onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="btn" id="login-btn"  onClick={handleSubmit}>
          LOGIN
        </button>
        <Link to="/Register">
          <button className="btn" id="register-btn">
            REGISTER
          </button>
        </Link>
      </form>
    </div>
  </div>
  );
}

}