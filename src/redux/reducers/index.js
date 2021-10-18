import { apartmentReducer } from './apartmentReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ apartmentReducer });

export default rootReducer;