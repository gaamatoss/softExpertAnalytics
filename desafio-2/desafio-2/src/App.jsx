import react from 'react'
import NavBar from './components/Navbar/NavBar'
import TelaPrincipal from './views/TelaPrincipal'
import TelaDados from './views/TelaDados'
import TelaDetalhamento from './views/TelaDetalhamento'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaPrincipal />} />
          <Route path="dados" element={<TelaDados />} />
          <Route path="detalhamento" element={<TelaDetalhamento />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
