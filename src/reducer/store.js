/* eslint-disable default-case */
const initialState = {
  token : ''
}

const store = (state = initialState, action) => {
  switch(action.type){
    case "SAVETOKEN": {
      return {
        ...initialState,
        token : action.payload
      }
  }
    }
      
}

export default store;