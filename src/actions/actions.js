import axios from 'axios';
import { loginUrl } from '../api/api';
import { newsUrl } from '../api/api';
import { passUrl } from '../api/api';
import { userUrl } from '../api/api';
import { walletUrl }from '../api/api';
import { regUrl } from '../api/api';
import { otpUrl } from '../api/api';
import { acpUrl } from '../api/api';
import { paymentUrl }from '../api/api';
import {gamesUrl }from '../api/api';
import {CompUrl }from '../api/api';
import {LiveUrl }from '../api/api';
import {upUrl }from '../api/api';
/* login */
export const login = data =>  dispatch => {
    return axios.post(loginUrl,data).then((res) => {
        dispatch({type:"LOGIN",payload : res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data));
        setTimeout(()=>{
            localStorage.clear();
        },1000000);
        // console.log(res.data.access_token);
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}
/*register*/
export const register = data =>  dispatch => {
   // console.log(data);
    return axios.post(regUrl,data).then((res) => {
     //   console.log(res.data);
        dispatch({type:"REGISTER",payload : res.data});
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
       // console.log(err.message);
        return false;
    })


}
/*otp verify*/
export const otp = data =>  dispatch => {
    //console.log(data);
    return axios.post(otpUrl,data).then((res) => {
      //  console.log(res.data);
        dispatch({type:"OTP",payload : res.data});
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })


}

/*fullaccount*/
export const acp = data =>  dispatch => {
   // console.log(data);
    return axios.post(acpUrl,data).then((res) => {
     //   console.log(res.data);
        dispatch({type:"OTP",payload : res.data});
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
       // console.log(err.message);
        return false;
    })


}

/* news */
export const news = (token) =>  async dispatch => {
   // console.log(token);
    try {
        const res = await axios.post(newsUrl, { params: { '': '' } }, { headers: { 'X-ACCESS-TOKEN': token } });
     //   console.log(res.data);
        dispatch({ type: "NEWS", payload: res.data });
        localStorage.setItem("data",JSON.stringify(res.data));
        return true;
    } catch (err) {
       // console.log(err.message);
        return false;
    }
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}


/* changepass*/
export const pass = (token,data) =>  dispatch => {
    //console.log(token,data);
    return axios.post(passUrl,data,{headers:{'X-ACCESS-TOKEN':token}}).then((res) => {
      //  console.log(res.data);
        dispatch({type:"PASS",payload :res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })

}

/* change user*/

export const user = (token,data1) =>  dispatch => {
    //console.log(token,data1);
    return axios.post(userUrl,data1,{headers:{'X-ACCESS-TOKEN':token}}).then((res) => {
      //  console.log(res.data1);
        dispatch({type:"USER",payload :res.data1});
        localStorage.clear();
        dispatch({type:"WALLET",payload : res.data});
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })

}

/* wallet and transaction*/
export const wallet = (token) =>  dispatch => {
    //console.log(typeof token);

    const headers = {'X-ACCESS-TOKEN':token}
    return axios.post(walletUrl ,{},{headers:headers}).then((res) => {
      //  console.log(res.data);
        dispatch({type:"WALLET",payload : res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}

export const games = (token) =>  dispatch => {
    const headers = {'X-ACCESS-TOKEN':token}
    return axios.post(gamesUrl ,{},{headers:headers}).then((res) => {
        dispatch({type:"GAMES",payload :res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}
export const live = (token,uuid) =>  dispatch => {
    const headers = {'X-ACCESS-TOKEN':token}
    return axios.post(LiveUrl ,{uuid},{headers:headers}).then((res) => {
        dispatch({type:"LIVE",payload :res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}

export const complete = (token,uuid) =>  dispatch => {
    const headers = {'X-ACCESS-TOKEN':token}
    return axios.post(CompUrl ,{uuid},{headers:headers}).then((res) => {
        dispatch({type:"COMPLETE",payload :res.data});
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}
export const upcoming = (token,uuid) =>  dispatch => {
    const headers = {'X-ACCESS-TOKEN':token}
    return axios.post(upUrl ,{uuid},{headers:headers}).then((res) => {
        dispatch({type:"UPCOMING",payload :res.data});
        console.log(res.data);
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("data",JSON.stringify(res.data.user));
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
        //console.log(err.message);
        return false;
    })
    //dispatch({type:"LOGIN",payload : data});
    
    //api.logIn(JSON.parse(JSON.stringify(data)));
    //console.log(state);
}
/* payment */
export const payment= (token,data) =>  dispatch => {
   // console.log(token,data);
    return axios.post(paymentUrl,data,{headers:{'X-ACCESS-TOKEN':token}}).then((res) => {
     //   console.log(res.data);
        dispatch({type:"PAYMENT",payload :res.data});
        //dispatch({type:"LOAD"});
        return true;
    }).catch((err) => {
       // console.log(err.message);
        return false;
    })

}



export const saveToken = (token) => dispatch => {

    dispatch({
        type : "SAVETOKEN",
        payload : token
    })
}

