import { combineReducers } from 'redux';
import appReducer from 'store/reducers/appReducer';

export default combineReducers({
    app: appReducer,
})