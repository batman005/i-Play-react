import React,{useState} from "react";
import { useSelector } from "react-redux";
import "../../styles/profile.css";
import {pass} from '../../actions/actions'
import {user} from '../../actions/actions'
import {useDispatch} from 'react-redux';
import {createMuiTheme,makeStyles,ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
    paddingLeft:'5rem',
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export const Profile = () => {
  const state = useSelector((state) => state);
  const name = state.state.data.user.full_name;
  const number = state.state.data.user.mobile_number;
  const email = state.state.data.user.email;
  const token = JSON.stringify(state.state.data.access_token);
  // console.log('access',token);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState('');
  const [emailid,setEmailid] = useState('');
  const [mobileno,setMobileno] = useState('');
  const [oldpassword, setOldpass] = useState('');
  const [newpassword, setNewpass] = useState('');
  const [confirmpassword, setConpass] = useState('');

  const data1 ={full_name:fullname,email:emailid,mobile_number: mobileno}
  const data = {new_password : newpassword ,old_password: oldpassword, password_confirmation:confirmpassword};

  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit Called");
    if(data1.full_name===""){
      console.log("if handle submit called");
      alert(`Please fill changes that you want`);
    }
    else{
      console.log("else handle submit called");
      submit();
    }
  }
  const submit = () => {
    console.log("resetUser :",state.state.resetUser);
    console.log(data1);
    dispatch(user(token,data1)).then((res) => {
      console.log(res);
      console.log("resetUser :",res);
    }).catch((err) => {
      console.log(err);
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
      console.log(res);
      console.log("resetPass :",state.state.resetPass);
    }).catch((err) => {
      console.log(err);
    })
    //console.log(state);
  }
  return (
    <div>
      <div id="Profile">
    <section className="section-center">
      <form>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
      <ThemeProvider theme={theme}>
        <Button variant="contained"  component="span" className={classes.button} color="primary">
          Upload
        </Button>
        </ThemeProvider>
      </label>
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
