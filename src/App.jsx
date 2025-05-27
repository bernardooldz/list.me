import Header from "./components/Header/Header"
import TodoImg from './assets/todo-image.svg'
import './app.css'
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Footer from "./components/Footer/Footer"

function App() {
  const navigate = useNavigate();

  return (
    <div className="div-geral-app-page">
      <Header home={true} />
      <main>
        <div className="home-hero">
          <div className="hero-text-conatiner">
            <h1>Organize todas as suas listas do dia a dia em um só lugar!</h1>
            <h2>Bem-vindo ao List.me, o seu gerenciador de listas.</h2>
            <p>Sabe aquelas folhas de caderno que você já arrancou só pra anotar uma listinha e depois jogou fora?</p>
            <p>Então... é exatamente isso que viemos substituir! Com o List.me, você economiza papel, ajuda o meio ambiente e ainda pode reutilizar suas listas sempre que quiser — sem precisar escrever tudo de novo. Desde listas de supermercado até listas de tarefas da semana!</p>
            <button onClick={() => navigate(`/lists`)}>
              Criar lista
              <ArrowRight size={20} />
            </button>

          </div>

          <div className="hero-img-container">
            <img src={TodoImg} alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App