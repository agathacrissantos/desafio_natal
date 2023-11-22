import './App.css'
import * as S from "./components/style"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from "./components/inicio"
import Acessorios from "./components/acessorios"
import Doacao from "./components/doacao"
import Contato from "./components/contato"
import noel from "../src/assets/Noel.png"

function App() {

  return (
      <S.Container>
        <figure>
          <img src={noel} />
        </figure>
        <h2>Feliz Natal</h2>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/acessorios">Acessórios</Link>
              </li>
              <li>
                <Link to="/doacao">Doação</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acessorios" element={<Acessorios />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
        </S.Container>
      
  )
}

export default App
