import React,{useState} from 'react';
import '../../styles/Login.css';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {otp} from '../../actions/actions';
import {useSelector} from 'react-redux';
export function VerifyOtp() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state);
  const uuid = state.state.regis.uuid;
  console.log("Uuid : ",uuid);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState("");
  const [otpno, setOtpno] = useState('');
  const [reloading, setReloading] = useState(false);

  const data = {uuid:uuid,otp : otpno};

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log("Handle Submit Called");
    if(data.otp===""){
      //console.log("if handle submit called");
      setReloading(false);
    }
    else{
     // console.log("else handle submit called");
      submit();
    }
  }

  const submit = () => {
   // console.log("data from submit : ",data);
    dispatch(otp(data)).then((res) => {
      console.log(res);
      if(res===true){
        setResponse(true);
        setReloading(true);
      }
      else{
        setResponse(false);
        setError('incorrect Otp');
        setReloading(false);
      }
    }).catch((err) => {
      console.log(err.message);
      setReloading(false);
    })
    //console.log(state);
  }

  if(reloading===true&&response===true){
  return <Redirect to="/MakeAccount" />
  } 

  else {
  return (
    <div id="container">
      <h2 id="info-text">Verify</h2>
      {error && <div className="card-panel red lighten-2">{error}</div>}
      <div id="form-container">
        <form id="login-form">
          <div className="form-control">
            <label>OTP</label>
            <input
              type="text"
              className="form-item"
              placeholder="Provide 5 Digit OTP"
              onChange={(e)=>setOtpno(e.target.value)}
            />
          </div>
          <button className="btn" id="login-btn" onClick={handleSubmit}>
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
};

}
