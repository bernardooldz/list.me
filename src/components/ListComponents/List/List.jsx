import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import AlertaDialog from "../../AlertDialog/AlertDialog";
import ToastInfos from "../../Toast/Toast";

function ListContainer({ listas, setListas }) {
  const navigate = useNavigate();

  const [openToast, setOpenToast] = useState(false);

  const handleDelete = (id) => {
    const updated = listas.filter((lista) => lista.id !== id);
    setListas(updated);
    setOpenToast(true);
  };

  if (!listas || listas.length === 0) {
    return <p className="emptyMessage">Nenhuma lista criada ainda.</p>;
  }

  return (
    <>
      <div className="listasBox">
        {listas.map((lista) => (
          <div key={lista.id} className="listaCard">
            <div className="listaInfo" onClick={() => navigate(`/list/${lista.id}`)}>
              <h3>{lista.title}</h3>
              <p>{lista.description}</p>
            </div>

            <AlertaDialog onConfirm={() => handleDelete(lista.id)}>
              <button
                className="deleteBtn"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Trash2 size={30} />
              </button>
            </AlertaDialog>
          </div>
        ))}
      </div>

      <ToastInfos
        open={openToast}
        setOpen={setOpenToast}
        title="Lista excluída"
        description="A lista foi removida com sucesso."
        status="Bad"
      />
    </>
  );
}

export default ListContainer;
