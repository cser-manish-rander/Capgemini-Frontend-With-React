import React, { useState } from 'react'

const Component2 = () => {
    let [state,setState] = useState();
    function handleChange(e){
        setState(prev=>({...prev, [e.target.name]:e.target.value}))
    }
    function handleSubmit(){
        
    }
  return (
    <div>
     <form onSubmit={(e)=>{
        e.preventDefault()
        
     }}>
        <div>
            <input type="text" onChange={(e)=>{ handleChange(e)}} name='userName' />
        </div>
        <div>
            <input type="email" onChange={(e)=>{ handleChange(e)}} name='email' />
        </div>
        <div>
            <input type="password" onChange={(e)=>{ handleChange(e)}} name='password' />
        </div>
        <button>Submit</button>
    </form> 
    </div>
  )
}

export default Component2