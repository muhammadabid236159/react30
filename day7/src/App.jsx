import { useState } from 'react'
import { Show } from './components/toggle'
import { Student } from './components/student'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Show />
      <Student/>

    </>
  )
}

export default App
