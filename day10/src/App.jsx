import { useState } from 'react'
import UserCounter from './components/usercounter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCounter count={count} setCount={setCount} />
    </>
  )
}

export default App
