import { useState } from 'react'
import ClassBased from './classBased'
import ClassBased2 from './classBased2'
import FunctionBased from './FunctionBased'
import ArrowFunction from './FunctionBased2';
import ConditionalRendering from './ConditionalRendering';
import ControlledForm from './ControlledForm';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>This is h2 tag</h2>

      {/* <ClassBased/> It is Stateful.*/}

      {/* { (new ClassBased()).render()}   This will not automatically updated we need to reload it.*/}
      
      {/* <ClassBased2/> */}
      
      {/* {(()=>{
        return <h2>This is Function Based Component.</h2>
      })()} */}

      {/* <FunctionBased/> */}

      {/* <ArrowFunction/> */}
      {/* Hooks are the predefined functions that we use to make function based component(stateLess) as stateFull */}

      <ConditionalRendering/>

      <ControlledForm/>
    </>
  )
}

export default App
