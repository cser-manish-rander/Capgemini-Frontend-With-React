import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GrandParent from './PropsComponent/GrandParent';
import ContextComponent from './ContextComponent/ContextComponent'
import ContextParent from './ContextComponent/ContextParent'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <GrandParent/> */}
      {/* <ContextComponent> */}
        {/* <h1>Hi this is the Custon Tag.</h1> */}
        {/* <ContextParent/>
      </ContextComponent> */}

      <Products/>
    </>
  )
}

export default App
