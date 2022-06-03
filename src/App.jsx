import { useState } from 'react'
import logo from './logo.svg'

import Message from './components/Message'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='error btn' onClick={()=>Message.onError('出错啦 Error:@#$%.....&%#@@#@$^')}>错误弹窗</div>
      <div className='success btn' onClick={()=>Message.onSuccess('成功啦')}>正确弹窗</div>
      <div className='info btn' onClick={()=>Message.onInfo('不知道啦')}>信息弹窗</div>
    </div>
  )
}

export default App
