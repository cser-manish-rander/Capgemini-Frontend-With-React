
import { applyMiddleware, createStore } from 'redux';
import { thunk } from "redux-thunk"
import { reduceruser } from '../reducer/ReducerProvider';

export let store = createStore(reduceruser, applyMiddleware(thunk))