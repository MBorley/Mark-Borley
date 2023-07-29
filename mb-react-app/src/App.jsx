import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './assets/Greeting'
import BigCats from './assets/BigCats'
import Emoji from './assets/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Greeting name="Mark">
          <p>How are you?</p>
        </Greeting>

        <Greeting name="Mark">
          <p>I am well</p>
        </Greeting>

        <BigCats />   

        <Emoji /> 
    </>
  );
} 

export default App

