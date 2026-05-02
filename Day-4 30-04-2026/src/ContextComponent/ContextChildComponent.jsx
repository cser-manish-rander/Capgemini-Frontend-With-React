import React, { useContext } from 'react'
import { contextAPI } from './ContextComponent'
import { getProducts, patchProduct, postProduct } from '../APIServiceLayer/APIRequests'


const ContextChildComponent = () => {
  // let {consumer} = contextAPI
  let data = useContext(contextAPI)

  return (
    <div>
      {/* <Consumer>
        {(value)=>{
          console.log(valueToNode);
          
        }}
      </Consumer> */}

      <div>{data.name}</div>

      <div>{data.state.count}</div>

      <button onClick={() => {
        data.updateState({ count: data.state.count + 1 })
      }}>Increment</button>

      <button onClick={() => {
        data.updateState({ count: data.state.count - 1 })
      }}>Decrement</button>

      <button onClick={() => {
        postProduct();
      }}>Post the data</button>

      <button onClick={() => {
        patchProduct("9fkIC92EQuM", { city: "Ramgudh" })
      }}
      >Patch the ID</button>

      <button onClick={() => {
        getProducts()
      }}>Get Products</button>
    </div>
  )
}

export default ContextChildComponent
