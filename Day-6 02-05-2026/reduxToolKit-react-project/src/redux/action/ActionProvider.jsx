export const addUser = (data)=> {return {type:"AddUSER", payload:[...data]}}
export const pendingUser = {type:"PENDING"}
export const fetchUser = (data)=>{
    return {payload:[...data],type:"GetUSER"}
}
export const removeUser = {type:"REMOVEUSER"}
