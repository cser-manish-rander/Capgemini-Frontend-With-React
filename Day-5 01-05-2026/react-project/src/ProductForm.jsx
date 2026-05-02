import React, { useState } from 'react'
import { postProduct } from './APIServiceLayer/APIRequests';



// React has Synthetic Events
//? Synthetic Event is a wrapper Event which wrap around Browser Event(Native Event) and provides some additional features.

const ProductForm = ({setCount}) => {
    let [product, setProducts] = useState()
    function onChangeFunction(e){
        // console.log("We are Changing Something");
        // setProduct(prev=>({name:"Jay"}))
        console.log(e.target.value);
        console.log(e.target.name);
        setProducts(prev=>({...prev, [e.target.name]:e.target.value}))
    }
  return (
    <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            postProduct(product)
            setCount(prev=>prev+1)
        }}>
            <div>
                <input type="text" name="name" value={product?.name || ""} onChange={(e)=>{
                    // console.log(e);
                    onChangeFunction(e)
                }} />
            </div>
            <div>
                <input type="text" name="description" value={product?.description || ""} onChange={(e)=>{
                    // console.log(e);
                    onChangeFunction(e)
                }} />
            </div>
            <button>Submit the Form</button>
        </form>
    </>
  )
}

export default ProductForm
