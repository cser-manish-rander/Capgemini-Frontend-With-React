import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../action/ActionProvider';

const Counter = () => {
    let data = useSelector(prev=>prev.count)
    let dispatch = useDispatch()
    console.log(data);
    
  return (
    <div>
      <h1>This is Redux Count {data}</h1>
      <button onClick={()=>{
        dispatch(incrementCount())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrementCount())
      }}>Decrement</button>
    </div>
  )
}

export default Counter
