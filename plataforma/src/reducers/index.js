import {combineReducers} from 'redux';

import listen from './listen';
import artists from './artists';

export default combineReducers({
    listen,
    artists
});