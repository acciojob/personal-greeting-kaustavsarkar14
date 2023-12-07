
import React from "react";
import './../styles/App.css';
import {useState} from 'react'

const App = () => {
  const[name, setName] = useState('')
  return (
    <div>
    <p>Enter your name:</p>
        {/* Do not remove the main div */}
        <input type="text" value={text} onChange={e=>setName(e.target.value}  />
        <p>Hello {name}!</p>
    </div>
  )
}

export default App
