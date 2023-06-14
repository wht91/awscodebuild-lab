import { useState } from 'react'
import myImage from './assets/my-image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/">
          <img src={myImage} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Wint Htet Thar</h1>
      <div className="card">
        <p>
          This is a dev server.
        </p>
      </div>
      <p className="read-the-docs">
        Click <a href="/">here</a> to know more about "Wint Htet Thar".
      </p>
    </>
  )
}

export default App