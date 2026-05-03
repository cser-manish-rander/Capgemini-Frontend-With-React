import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./feature/userSlice"

export let store = configureStore({reducer:{
    user:userReducer
}})