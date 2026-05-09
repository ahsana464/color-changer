import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
  }



  return (
    <>


      <div>
        <h1>counter value = {counter} </h1> <br />
        <button onClick={addValue}> add  </button> <br /> <br />
        <button onClick={removeValue}> minus  </button> <br /> <br />

      </div>
    </>
  )
}

export default App
