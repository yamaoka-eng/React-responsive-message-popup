import { useEffect, useState, useRef } from "react"
import ReactDOM from "react-dom"
import { BsCheckCircleFill, BsFillXCircleFill, BsInfoCircleFill } from "react-icons/bs"

import styles from './Message.module.scss'

const iconType = {
  success: 'success',
  error: 'error',
  info: 'info'
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Message = ({ onClaer, type, msg, callBack }) => {

  const progressTime = 5000

  const [out, setOut] = useState(false)

  const [time , setTime] = useState(progressTime)

  const [speed, setSpeed] = useState(75)

  useEffect(()=>{
    if (time <= 0) exit() 
  }, [time])

  useInterval(()=>{
    setTime(time - 75)
  }, speed)

  const exit = () => {
    setOut(true)
    setTimeout(() => onClaer(), 1000)
  }

  const chooseIcon = (type) => {
    switch (type) {
      case iconType.success: return <span className={styles[type]}><BsCheckCircleFill/></span>
      case iconType.error: return <span className={styles[type]}><BsFillXCircleFill/></span>
      case iconType.info: return <span className={styles[type]}><BsInfoCircleFill/></span>
    }
  }

  return (
    <div className={`${styles.message} ${out && styles.out}`} onClick={callBack} onMouseMove={()=>setSpeed(null)} onMouseLeave={()=>setSpeed(50)}>
      <div onClick={exit} className={styles.exit}>X</div>
      <div className={styles.content}>
        { chooseIcon(type) }
        <span className={styles.msg}>{msg}</span>
      </div>
      <div className={styles[type+'Progress']} style={{width: `${(time/progressTime)*100}%`}}></div>
    </div>
  )
}

// type弹窗类型,可以根据不同类型,渲染不同类型弹窗的样式
const MessageAPI = (type,msg,callBack) => {

  const toastify = document.getElementById('toastify')
	const msgBox = document.createElement('div')
  msgBox.className = 'toast'
	toastify.appendChild(msgBox)

	const onClaer = () => {
		if(!!msgBox){
			ReactDOM.unmountComponentAtNode(msgBox)
      msgBox.remove()
		}
	}
	
	ReactDOM.render(
		<Message
		 msg={msg}
     type={type}
     onClaer={onClaer}
     callBack={()=> !!callBack && callBack()}
		/>,
		msgBox
	)
}

Message.onSuccess = (msg, callBack) => MessageAPI(iconType.success, msg, callBack)
Message.onError = (msg, callBack) => MessageAPI(iconType.error, msg, callBack)
Message.onInfo = (msg, callBack) => MessageAPI(iconType.info, msg, callBack)

export default Message
