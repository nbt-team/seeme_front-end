import React from 'react'
import './style.scss'
import Header from './components/Header'
import General from './components/General'
import ChatPage from './components/ChatPage'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <>
        <Header />
        <Route exact path='/'>
          <General />
        </Route>
        <Route path='/chat'>
          <ChatPage />
        </Route>
        <Footer />
      </>
    </Router>
  )
}

export default App
