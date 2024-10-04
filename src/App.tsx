import React from 'react'
import './App.css'
import Button from './components/_atoms/button'
import { Card } from './components/card/Card'

function App() {
  return (
    <>
      <Button>Reset</Button>
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </>
  )
}

export default App
