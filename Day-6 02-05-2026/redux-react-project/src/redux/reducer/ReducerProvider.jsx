
import { apiInstance } from './../action/AxiosInstance';
import { addUser, fetchUser, pendingUser } from './../action/ActionProvider';
let initialState = {user:[]}

export let fetchAPI = ()=>{
    return async(dispatch)=>{
        dispatch(pendingUser)
        let res = await apiInstance.get("/user")
        console.log(res);
        
        dispatch(fetchUser(res.data))
    }
}
export let postAPI = (data)=>{
    return async(dispatch)=>{
        // dispatch(addUser)
        let res = await apiInstance.post("/user", data)
        console.log(res);
        
        dispatch(addUser(res.data))
    }
}

export function reduceruser(state=initialState, action){
    switch(action.type)
    {
        case "AddUSER": return {}
        case "PENDING": return {...state, loading:true}
        case "GetUSER": return{...state, loading:false,user:[...action.payload]} 
        case "REMOVEUSER":  return 
        default: return state 
    }
}

