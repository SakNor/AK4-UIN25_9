import { useState } from 'react'
import './App.css'
import './components/Header'
import Header from './components/Header'
import David from './components/David'
import Jenny from './components/Jenny'
import Sakarias from './components/Sakarias'

function App() {
  return (
    <main>
    <Header />
    <David />
    <Jenny/>
    <Sakarias/>
    </main>
  )
}

export default App
