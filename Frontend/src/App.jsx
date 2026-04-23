import './App.css'
import './components/Header'
import Header from './components/Header'
import David from './components/David'
import Jenny from './components/Jenny'
import Aurora from './components/Aurora'
import Sakarias from './components/Sakarias'

function App() {
  return (
    <>
  <header>
    <Header />
  </header>

    <main>
      <section>
        <David />
        <Jenny/>
        <Aurora/>
        <Sakarias/>
      </section>
    </main>
    </>
  )
}

export default App
