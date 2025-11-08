
import './App.css'
import AutoCount from './components/AutoCount';
import StopWatch from './components/StopWatch';
import RandomTodo from './components/RandomTodo';

function App() {

  return (
    <>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 15, flexDirection: 'column' }}> */}
      {/* <AutoCount /> */}
      {/* <h1 style={{ color: "red" }}>Stop Watch Counter</h1> */}
      {/* <StopWatch /> */}
      {/* </div> */}
      <div>
        <RandomTodo /> 
      </div>
    </>
  )
}

export default App
