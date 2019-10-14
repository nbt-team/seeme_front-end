import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"

const General = () => {
  const [hostLive, setHostLive] = useState(false)
  const hostLiveCB = useRef(null)
  const connectLiveCB = useRef(null)
  const checkForSelected = () => {
    if (hostLiveCB.current.checked) {
      setHostLive(true)
    } else if (connectLiveCB.current.checked) {
      setHostLive(false)
    }
  }

  let style
  if (!hostLive) {
    style = { gridColumn: '1/3' }
  } else {
    style = {}
  }
  let chatId = '82378d238jdhd2'
  return (
    <main>
      <div className="wrapper">
        <h1>Welcome to</h1>
        <h1>See Me</h1>
        {/* <button onClick={func}>Check</button> */}
        <div className="checkboxes">
          <div>

          <label class="container">Host your live
              <input onChange={checkForSelected} ref={hostLiveCB} type="radio" name="type" id="hostLive"/>
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <label class="container">Connect to live
              <input onChange={checkForSelected} ref={connectLiveCB} type="radio" name="type" id="connectLive" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="inputs">
          <input type="text" placeholder='Your nickname' />
          {hostLive &&
            <input id='url' type="text" value={chatId} />
          }
        </div>
        <div className="buttons">
          {hostLive &&
            <Link to='/chat'>
              <button id='startBtn'>Start chat</button>
            </Link>
          }
          <Link to={`/chat/${chatId}`} style={style}>
            <button id='connectBtn'>Connect</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default General