import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => Message.onError('失败啦')}>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => {Message.onSuccess('成功啦');setCount((count) => count + 1)}}>
            count is: {count}
          </button>
        </p>
        <p onClick={() => Message.onInfo('lalala')}>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
