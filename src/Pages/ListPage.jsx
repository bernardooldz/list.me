import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import AddTaskToList from "../components/TaksComponents/AddTaskToList";
import TaskList from "../components/TaksComponents/TaskList/TaksList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function ListPage() {
  const { id } = useParams();
  const [lista, setLista] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("listas");
    if (stored) {
      const listas = JSON.parse(stored);
      const encontrada = listas.find((l) => l.id === id);

      console.log("Lista encontrada:", encontrada);
      setLista(encontrada);
    }
  }, [id]);

  if (!lista) {
    return <p>Lista não encontrada.</p>;
  }

  return (
    <div>
      <Header section="list" sectionName={lista?.title || ''} />
      <div className="divPrincipal">      
      <div className="container">
        <div className="containerAddTasks">
          <Title sectionName="Adicionar novo item" nameClass="subTitles" />
          <AddTaskToList lista={lista} setLista={setLista} />
        </div>

        <div className="containerAddTasks">
          <Title sectionName="Itens da Lista" nameClass="subTitles" />
          <TaskList lista={lista} setLista={setLista} />
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default ListPage;
