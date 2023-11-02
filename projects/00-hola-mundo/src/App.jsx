import { useState } from 'react'
import './App.css'
import { Card } from './Card.jsx'

export function App() {
  return (
    <>
      <div className='main-div'>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  )
}