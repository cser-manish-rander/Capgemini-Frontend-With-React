import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
        <h3>The surname of the parent is: {props.value.surname} </h3>
      <Child value={props}/>
    </div>
  )
}

export default Parent
