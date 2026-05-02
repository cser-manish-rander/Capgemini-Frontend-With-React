let initialState={user:[
    {name:"Abhishek"}, {name:"Shetty"}, {name:"Rajkumar"}
]}

export function addUserAction(data){
    return {type:"addUser", payload:data}
}
export function removeUserAction(data){
    return {type:"removeUser", payload:data}
}

export function userReducer(state = initialState,action){
    switch(action.type){
        case "removeUser" : 
        {
            return {...state, user:state.user.filter(v=>v.name != action.payload)}
        }
        case "addUser" : 
        {
            return {...state, user:[...state.user, action.payload]}
        }
        default: return state;
    }
}
