import { useState } from 'react'
import './App.css'
import './components/Header'
import Header from './components/Header'
import David from './components/David'
import Jenny from './components/Jenny'

function App() {
  return (
    <main>
    <Header />
    <David />
    <Jenny/>
    </main>
  )
}

export default App
