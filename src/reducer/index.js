import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import state from './state';

const persistConfig ={
    key: 'root',
    storage,
    whitelist:['state']
}
const rootReducer =combineReducers({
     state
});
export default persistReducer(persistConfig,rootReducer);