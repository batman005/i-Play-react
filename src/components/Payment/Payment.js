import React,{useState} from 'react';
import '../../styles/payment.css';
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import {payment} from '../../actions/actions'
export const Payment = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const token = JSON.stringify(state.state.data.access_token);
  const [amount, setAmount] = useState('');

  const data={amount:amount};
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit Called");
    if(data.amount===""){
      console.log("if handle submit called");
      alert(`Please fill the amount`);
    }
    else{
      console.log("else handle submit called");
      submit();
    }
  }
  const submit = () => {
    console.log("payment :",state.state.payment);
    console.log(data);
    dispatch(payment(token,data)).then((res) => {
      console.log(res);
      console.log("payment :",state.state.payment);
    }).catch((err) => {
      console.log(err);
    })
    //console.log(state);
  }


 return (
        <div>
            <div id="Payment">
        <section className="payment">
             <form>
             <div className="form-control">
                    <label>Add Payment</label>
                    <input
            type="number"
            className="form-item"
            placeholder="number"
            onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className="btn"  onClick={handleSubmit}>SUBMIT YOUR PAYMENT</button>
            </form>
       </section>
       </div>
        </div>
    )
}