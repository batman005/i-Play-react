import React,{useState} from 'react'
import '../../styles/Home.css';
import {useDispatch,useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import BottomSheet from '../Home/BottomSheet';
import {games} from '../../actions/actions'
export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.state);
  const token = JSON.stringify(state.data.access_token);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Handle Submit Called");
      submit();
  }
  const submit = () => {
    dispatch(games(token)).then((res) => {
      if(res===true){
        setLoading(true);
      }
      else{
        setLoading(false);
      }
    }).catch((err) => {
      setLoading(false);
    })
    //console.log(state);
  }
  if(loading===true ){
    return <Redirect to="/Home/Games" />
    } 
  
    else {
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
        <button className="btn btn-block  btn-large" onClick={handleSubmit}>Start Playing Games</button>
        </div>
      </div>
      </div>
    </div> ) : <Redirect to = "/"/>
  );
}
}