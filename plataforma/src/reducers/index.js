import {combineReducers} from 'redux';

import listen from './listen';
import artists from './artists';
import albums from './albums';
import play from './play';

const appReducer = combineReducers({
    listen,
    artists,
    play,
    albums
});

const initialState = appReducer({}, {}, {}, {});

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
      state = initialState
    }
  
    return appReducer(state, action)
  }

export default rootReducer;