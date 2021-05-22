import React,{useState} from 'react';
import '../../styles/Login.css';
import iplay from '../../assets/logo_white.png'
import {useDispatch} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {register} from '../../actions/actions';
export function Register() {
  const dispatch = useDispatch();
  const [mobileno, setMobileno] = useState('');
  const [reloading, setReloading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(false);
  const history = useHistory()
  const data = {mobile_number: mobileno};

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit Called");
    if(data.mobile_number===""){
      console.log("if handle submit called");
      setReloading(false);
      history.push("/Register");
      setError('Failed to register');
    }
    else{
      console.log("else handle submit called");
      submit();
      setError(false);
    }
  }

  const submit = () => {
    console.log("data from submit : ",data);
    dispatch(register(data)).then((res) => {
      console.log(res);
      if(res===true){
        setResponse(true);
        setReloading(true);
      }
      else{
        setResponse(false);
        setError('already registered mobile no');
        setReloading(false);
      }
    }).catch((err) => {
      console.log(err.message);
      setReloading(false);
    })
    //console.log(state);
  }

  if(reloading===true&&response===true){
  return <Redirect to="/Verify" />
  } 

  else {
  


  return (
    <div id="container">
      <h3 id="info-text">Register to</h3>
      {error && <div className="card-panel red lighten-2">{error}</div>}
      <img id="logo-white" src= {iplay}alt="logo"></img>
      <div id="form-container">
        <form id="login-form">
          <div className="form-control">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-item"
              placeholder="Provide Mobile Number"
              onChange={(e)=>setMobileno(e.target.value)}
            />
          </div>
          <button className="btn" id="login-btn"  onClick={handleSubmit}>
            VERIFY USING OTP
          </button>
          <Link  to="/" style={{ textDecoration: 'none' }}>
          <button className="btn" id="register-btn">
            LOGIN
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

}

