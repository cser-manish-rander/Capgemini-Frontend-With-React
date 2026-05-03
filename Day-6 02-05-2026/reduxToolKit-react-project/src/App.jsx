import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Component2 from './redux/Component/Component2'
import Component1 from './redux/Component/Component1'
import { store } from './redux/store/Store';
import ComponentRTK from './RTK/ComponentRTK'

function App() {

  return (
    <>
      {/* <Provider store={store}>
        <Component2 />
        <Component1 />
      </Provider> */}
      <ComponentRTK/>
    </>
  )
}

export default App
