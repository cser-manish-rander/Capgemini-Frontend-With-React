import axios from "axios"

export let apiInstance = axios.create({
    baseURL:"http://localhost:3000",
    header:{
        "Content-Type":"application/json"
    }
})