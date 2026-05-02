
import { combineReducers, createStore } from 'redux';
import { reducerFunction } from '../reducer/ReducerProvider';
import { userReducer } from '../reducer/UserReducer';

let rootReducer = combineReducers({count: reducerFunction, userred: userReducer})
export let store = createStore(rootReducer)
// export let store = createStore(reducerFunction)
