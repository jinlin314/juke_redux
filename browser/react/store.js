import {createStore, combineReducers} from 'redux';
// import reducer from './reducers/root-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer'


const applyMiddleware = require('redux').applyMiddleware;

const reducer = combineReducers({
                                    lyrics: lyricsReducer,
                                    player: playerReducer
                                });

export default createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));