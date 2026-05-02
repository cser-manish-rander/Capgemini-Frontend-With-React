import axios from './../../node_modules/axios/lib/axios';


let axiosInstance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
});

export let postProduct = async(data)=>{
    // let res = await axiosInstance.post("/products", {name:"Jay", friend:"Veeru"})
    let res = await axiosInstance.post("/products", data)
    console.log(res.data);
    
}

//id, data
export let patchProduct = async(data)=>{
    let res = await axiosInstance.patch(`/products/${data.id}`, data)
    console.log(res.data);
}

export let getProducts = async()=>{
    let res = await axiosInstance.get("/products")
    console.log(res.data);
    return res;
     
}
export let deleteProducts = async(id)=>{
    let res = await axiosInstance.delete(`/products/${id}`)
    console.log(res);
     
}
export let getOneProducts = async(id)=>{
    let res = await axiosInstance.get(`/products/${id}`)
    console.log(res);
     
}