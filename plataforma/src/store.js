import { createStore } from 'redux';
import listen from './reducers/listen'; // converter para reducers

const store = createStore(listen);

export default store;