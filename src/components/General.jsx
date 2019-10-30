import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
// import classie from '../static/classie'

const General = () => {
  const [hostLive, setHostLive] = useState(false)

  const [inputEl1IsFocused, setInputEl1] = useState(false)
  const [inputEl2IsFocused, setInputEl2] = useState(false)

  const hostLiveCB = useRef(null)
  const connectLiveCB = useRef(null)

  const inputEl1 = useRef(null)
  const inputEl2 = useRef(null)
  const spanEl1 = useRef(null)
  const spanEl2 = useRef(null)


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

  if (inputEl1IsFocused) {
    inputEl1.current.style.borderColor = '#da6484' 
    spanEl1.current.style.opacity = '100%'
  }

  if (inputEl2IsFocused) {
    inputEl2.current.style.borderColor = '#da6484' 
    spanEl2.current.style.opacity = '100%'
  }

  return (
    <main>
      <div className="wrapper">
        <h1>Welcome to</h1>
        <h1>See Me</h1>
        <CheckBoxes checkForSelected={checkForSelected} hostLiveCB={hostLiveCB} connectLiveCB={connectLiveCB} />
        <div className="inputs">
          <span ref={spanEl1}>Your Nickname</span>
          <input onBlur={() => {setInputEl1(false);spanEl1.current.style.opacity = '0%';inputEl1.current.style.borderColor = 'white'}} onFocus={() => {setInputEl1(true)}} type="text" ref={inputEl1} className='inputInGeneralPage' placeholder='Your nickname' />
          <span ref={spanEl2}>Stream URL</span>
          {!hostLive &&
            <input onBlur={() => {setInputEl2(false);spanEl2.current.style.opacity = '0%';inputEl2.current.style.borderColor = 'white'}} onFocus={() => {setInputEl2(true)}} id='url' ref={inputEl2} className='inputInGeneralPage' type="text" placeholder='Enter stream URL' />
          }
          {hostLive &&
            <input onBlur={() => {setInputEl2(false);spanEl2.current.style.opacity = '0%';inputEl2.current.style.borderColor = 'white'}} onFocus={() => {setInputEl2(true)}} id='url' ref={inputEl2} className='inputInGeneralPage' type="text" value={ chatId } placeholder='Enter stream URL' />
          }
          </div>
        <Buttons hostLive={hostLive} chatId={chatId} style={style} />
      </div>

    </main>
  )
}

const CheckBoxes = ({ checkForSelected, hostLiveCB, connectLiveCB }) => (
  <div className="checkboxes">
    <div>
      <label class="container">Host your live
        <input onChange={checkForSelected} ref={hostLiveCB} type="radio" name="type" id="hostLive" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div>
      <label class="container">Connect to live
        <input defaultChecked onChange={checkForSelected} ref={connectLiveCB} type="radio" name="type" id="connectLive" />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
)

const Buttons = ({ hostLive, chatId, style }) => (
  <div className="buttons">
    {hostLive &&
      <Link to='/chat'>
        <button class="button button--aylen button--border-thick button--inverted button--text-upper button--size-s">Start chat</button>
      </Link>
    }
    <Link to={`/chat/${chatId}`} style={style}>
      <button class="button button--aylen button--border-thick button--inverted button--text-upper button--size-s">Connect</button>
    </Link>
  </div>
)

export default General