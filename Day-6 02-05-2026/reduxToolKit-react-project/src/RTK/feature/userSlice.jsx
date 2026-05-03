import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"userslice",
    initialState:{user:[]},
    reducers:{
        adduser:(state, action)=>{
            // console.log(state, action);
            state = {...state,user:[...state.user, action.payload]}
            return state
        },
        deleteUser:(state, action)=>{
            state.user = state.user.filter(
                (item, index)=> index != action.payload
            )
        },
        updateUser:(state, action)=>{
            const{index, newValue} = action.payload;
            state.user[index] = newValue
        }
    },
})

export let {adduser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer