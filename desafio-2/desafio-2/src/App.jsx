import react, { useEffect } from 'react'
import NavBar from './components/Navbar/NavBar'
import TelaPrincipal from './views/TelaPrincipal'

function App() {



  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <NavBar />
      <TelaPrincipal />
    </div>
  )
}

export default App
