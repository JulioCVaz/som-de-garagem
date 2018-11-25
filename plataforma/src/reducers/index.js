import {combineReducers} from 'redux';

import listen from './listen';
import artists from './artists';
import albums from './albums';
import playMusic from './playMusic';
import playPause from './playPause';
import profile from './profile';
const appReducer = combineReducers({
    listen,
    artists,
    playMusic,
    albums,
    playPause,
    profile
});

const initialState = appReducer({}, {}, {}, {}, {}, {});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
      state = initialState
    }
  
    return appReducer(state, action)
  }

export default rootReducer;