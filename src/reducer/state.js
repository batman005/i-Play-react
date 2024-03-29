const initialState = {
    data:{},
    regis:{},
    verify:{},
    news:{},
    wallet:{},
    resetUser:{},
    resetPass:{},
    games:{},
    matches:{},
    coming:{},
    load:true,
    token : ''
}


const state = (initState = initialState,action) => {
    switch(action.type){
        case "LOGIN":{
            return{...initState,data:action.payload,load:false,token:action.payload.access_token}
        }
        case "REGISTER":{
            return{...initState,regis:action.payload,load:false}
        }
        case "OTP":{
            return{...initState,verify:action.payload,load:false}
        }
        case "NEWS":{
            return{...initState,news:action.payload,load:false}
        }
        case "PASS":{
            return{...initState,resetPass:action.payload,load:false}
        }
        case "USER":{
            return{...initState,resetUser:action.payload,load:false}
        }
        case "WALLET":{
            return{...initState,wallet:action.payload,load:false}
        }
        case "GAMES":{
            return{...initState,games:action.payload,load:false}
        }
        case "LIVE":{
            return{...initState,live:action.payload,load:false}
        }
        case "COMPLETE":{
            return{...initState,matches:action.payload,load:false}
        }
        case "UPCOMING":{
            return{...initState,coming:action.payload,load:false}
        }
        case "PAYMENT":{
            return{...initState,payment:action.payload,load:false}
        }
        case "LOAD":{
            return{...initState,load:true}
        }
   
        default:{
            return initialState;
        }
    }
}

export default state;