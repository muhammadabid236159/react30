import { useState } from 'react'
import Registerform from './components/registerform'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registerform/>
    </>
  )
}

export default App
