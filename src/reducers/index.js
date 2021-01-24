import { combineReducers } from 'redux';
import appReducer from './appReducer';
import columnStateReducer from './columnStateReducer';
import scoresReducer from './scoresReducer';

const rootReducer = combineReducers({ app: appReducer, columnState: columnStateReducer, scores: scoresReducer });

export default rootReducer;