import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from "./State-Learnings/01_UseState/components/Counter.jsx";
import LikeBtn from './State-Learnings/01_UseState/components/LikeBtnActivity.jsx';
import './App.css'

function App() {

  return (
    <>
      <h1>State in React</h1>
      <Counter />
      <LikeBtn />
    </>
  )
}

export default App
