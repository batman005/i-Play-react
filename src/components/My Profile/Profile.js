import React,{useState} from "react";
import { useSelector } from "react-redux";
import "../../styles/profile.css";
import {pass} from '../../actions/actions'
import {user} from '../../actions/actions'
import {wallet} from '../../actions/actions'
import {games} from '../../actions/actions'
import {useDispatch} from 'react-redux';
import { ToastContainer ,toast } from 'react-toastify';
export const Profile = () => {
  const state = useSelector((state) => state);
  const trans = useSelector(state=>state);
  const name = trans.state.wallet.user.full_name; 
  const email = trans.state.wallet.user.email; 
  const number = trans.state.wallet.user.mobile_number; 
  const token = JSON.stringify(state.state.data.access_token);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState('');
  const [emailid,setEmailid] = useState('');
  const [mobileno,setMobileno] = useState('');
  const [oldpassword, setOldpass] = useState('');
  const [newpassword, setNewpass] = useState('');
  const [confirmpassword, setConpass] = useState('');
  const [profileImage, setImage] = useState('');

  const data1 = {profile_image:profileImage,full_name:fullname,email:emailid,mobile_number: mobileno}
  const data = {new_password : newpassword ,old_password: oldpassword, password_confirmation:confirmpassword};


  const handleSubmit = (e) => {
    e.preventDefault()
    if(data1.full_name===""){
      submit(false);
    }
    else{
      submit();
    }
  }
  const submit = () => {
    console.log("resetUser :",state.state.resetUser);
    console.log(data1);
    dispatch(user(token,data1)).then((res) => {
      if(res===true){
        toast.success('Success');
        dispatch(wallet(token));
        dispatch(games(token));
      }
      else{
        toast.error('name not changed');
      }
    }).catch((err) => {
      console.log(err);
      toast.error('name not changed');
    })
    //console.log(state);
  }
  
  const handleSubmit1 = (e) => {
    e.preventDefault()
    console.log("Handle Submit Called");
    if(data.old_password===""||data.new_password===""||data.password_confirmation===""){
        submit1(false);
    }
    else{
      submit1();
    }
  }
  const submit1 = () => {
    console.log("resetPass :",state.state.resetPass);
    console.log(data);
    dispatch(pass(token,data)).then((res) => {
      if(res===true){
        toast.success('Password changed');
      }
      else{
        toast.error('password not changed');
      }
    }).catch((err) => {
      console.log(err);
    })
    //console.log(state);
  }
  return (
    <div>
      <div id="Profile">
    <section className="section-center">
      <ToastContainer/>
      <form>
      <div className="col s12 center mt-2">
        <img
          className="image"
          width="80"
         id="profileImage"
         src= ''
         alt='/'
                   />
                  </div>
                  <div id='file' className="file-field input-field col s6 center">
                    <div className="btn col s6 green center profile-btn waves-effect waves-light">
                      <span className="center">File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e)=>setImage(e.target.value)}
                      />
                    </div>
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate d-none"
                        type="text"
                      />
                    </div>
                  </div>
        <div className="form-control">
          <label>Full Name</label>
          <input
            type="text"
            className="form-item"
            placeholder={name}
            onChange={(e)=>setFullname(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="form-item"
            placeholder={email}
            onChange={(e)=>setEmailid(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Mobile Number</label>
          <input
            type="number"
            className="form-item"
            placeholder={number}
            onChange={(e)=>setMobileno(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>SAVE</button>
      </form>
      <h6>Password Update</h6>
      <form>
        <div className="form-control">
          <input
            type="password"
            className="form-item"
            placeholder="Old Password"
            onChange={(e)=>setOldpass(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            className="form-item"
            placeholder="New Password"
            onChange={(e)=>setNewpass(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            className="form-item"
            placeholder="Confirm Password"
            onChange={(e)=>setConpass(e.target.value)}
          />
        </div>
        <button className="btn"  onClick={handleSubmit1}>SAVE</button>
      </form>
    </section>
    </div>
    </div>
  );
};

