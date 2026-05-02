import React from 'react'

const Child = (childProps) => {
    console.log(childProps);
    
  return (
    <div>
      <h3>This is the surname in the child component</h3>
      <hr />
      {childProps.value.value.surname}
    </div>
  )
}

export default Child
