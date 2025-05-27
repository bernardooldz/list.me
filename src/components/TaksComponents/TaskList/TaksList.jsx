import "./styles.css";
import { Trash2 } from "lucide-react";

function TaskList({ lista, setLista }) {
  const handleToggleDone = (id) => {
    const atualizada = {
      ...lista,
      tasks: lista.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    };
    setLista(atualizada);
    salvarNoStorage(atualizada);
  };

  const handleDelete = (id) => {
    const atualizada = {
      ...lista,
      tasks: lista.tasks.filter((task) => task.id !== id),
    };
    setLista(atualizada);
    salvarNoStorage(atualizada);
  };

  const salvarNoStorage = (novaLista) => {
    const armazenadas = JSON.parse(localStorage.getItem("listas")) || [];
    const atualizadas = armazenadas.map((l) =>
      l.id === novaLista.id ? novaLista : l
    );
    localStorage.setItem("listas", JSON.stringify(atualizadas));
  };

  if (!lista.tasks || lista.tasks.length === 0) {
    return <p className="emptyMessage">Nenhuma tarefa adicionada.</p>;
  }

  return (
    <div className="listasBox">
      {lista.tasks.map((task) => (
        <div key={task.id} className={`listaCard ${task.done ? "done" : ""}`}>
          <div
            className="listaInfo"
            onClick={() => handleToggleDone(task.id)}
            style={{ cursor: "pointer" }}
          >
            <h3>{task.title}</h3>
          </div>
          <button className="deleteBtn" onClick={() => handleDelete(task.id)}>
            <Trash2 size={24} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
