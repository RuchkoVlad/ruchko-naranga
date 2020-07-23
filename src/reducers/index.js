import { combineReducers } from 'redux';
import getAllPeople from './getAllPeople.reducer';

const rootReducer = combineReducers({
    getAllPeople,
});

export default rootReducer;
