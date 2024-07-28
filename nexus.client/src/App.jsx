import { useState } from 'react'
import './App.css'
import {setSystem} from "@/redux/actions/systemAction.js";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage/index.jsx";

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const handleRedux = () => {
    setCount((prevState) => prevState + 1)
    dispatch(setSystem(count))
  }

  return (
    <>
      <div className="card">
        <button
          onClick={() => handleRedux((count) => count + 1)}
        >
          count is {count}
        </button>

      </div>
      <section>
        <Routes>
          <Route path={`/`} element={<HomePage />} />
        </Routes>
      </section>
    </>
  )
}

export default App
