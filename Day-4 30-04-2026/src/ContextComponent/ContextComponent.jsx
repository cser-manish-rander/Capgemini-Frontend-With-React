import React, { createContext, useState } from 'react'
import ContextParent from './ContextParent'

// First we need to create and export the context API reference
//? we use the createContext method

// createComponent will returns an object which has 3 properties
// $$typeOf - It is just for identification of context
// Provider - it has the props called "value" in which we have to pass the data so that consumer can consume it and accepts in the callback function. 


export let contextAPI = createContext()


const ContextComponent = (props) => {
  // console.log(contextAPI);
  let {Provider} = contextAPI;
  let [state, setState] = useState({count:0});
  // setCount(prev=>({...prev,...obj}))
  function updateState(obj){
    setState(prev=>({...prev, ...obj}));
  }



  return (
    <div>
      <Provider value={{name:"JECRC", state, updateState}}>
        {props.children}
      </Provider>

    </div>
  )
}

export default ContextComponent
