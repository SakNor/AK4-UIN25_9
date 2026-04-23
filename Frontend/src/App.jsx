import './App.css'
import './components/Header'
import Header from './components/Header'
import David from './components/David'
import Jenny from './components/Jenny'
import Aurora from './components/Aurora'
import Sakarias from './components/Sakarias'
import Arbeidskrav from './components/Arbeidskrav'

function App() {
  return (
    <>
  <header>
    <Header />
  </header>
    <main>
      <section className="personerKort">
        <David />
        <Jenny/>
        <Aurora/>
        <Sakarias/>
      </section>
      <Arbeidskrav/>
    </main>
    </>
  )
}

export default App
