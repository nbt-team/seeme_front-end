import React, {useState, useRef} from 'react'

const Main = () => {
  const [hostLive, setHostLive] = useState(false)
  const hostLiveCB = useRef(null)
  const connectLiveCB = useRef(null)
  const checkForSelected = () => {
    if(hostLiveCB.current.checked) {
      setHostLive(true)
    } else if (connectLiveCB.current.checked) {
      setHostLive(false)
    }
  }
  
  let style
  if (!hostLive) {
    style = {gridColumn: '1/3'}
  } else {
    style = {}
  }

  return (
    <main>
      <h1>Welcome to</h1>
      <h1>See Me</h1>
      {/* <button onClick={func}>Check</button> */}
      <div className="checkboxes">
        <div>
          <label for="hostLive">Host your live</label>
          <input onChange={checkForSelected} ref={hostLiveCB} type="radio" name="type" id="hostLive"/>
        </div>
        <div>
          <label for="connectLive">Connect to live</label>
          <input onChange={checkForSelected} ref={connectLiveCB} type="radio" name="type" id="connectLive"/>
        </div>
      </div>
      <div className="inputs">
        <input type="text" placeholder='Your nickname' />
        { hostLive &&
          <input id='url' type="text" value={'url'} />
        }
        </div>
      <div className="buttons">
        <button id='startBtn' style={style}>Start chat</button>
        { hostLive &&
          <button id='connectBtn'>Connect</button>
        }
      </div>
    </main>
  )
}

export default Main