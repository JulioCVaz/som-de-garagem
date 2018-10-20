import {combineReducers} from 'redux';

import listen from './listen';
import artists from './artists';
import play from './play';

export default combineReducers({
    listen,
    artists,
    play
});