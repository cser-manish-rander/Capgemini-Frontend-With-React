import { useState } from 'react'
import './App.css'
import StoreDummyComponent from './redux/StoreDummyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StoreDummyComponent/>
    </>
  )
}

export default App
