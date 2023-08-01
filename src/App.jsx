import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import { RatingProvider } from './context/RatingContext'

function App() {
  

  return (
    <RatingProvider>
      <Navbar/ >
      <div className="container">
        <Form />
        <ListGroup />
      </div>
    </RatingProvider>
  )
}

export default App
