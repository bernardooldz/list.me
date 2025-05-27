import { Form } from "radix-ui";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import ToastInfos from "../../Toast/Toast";

const FormComponent = ({ listas, setListas }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    const novaLista = {
      id: uuidv4(),
      title,
      description,
      tasks: []
    };

    localStorage.setItem("listas", JSON.stringify([...listas, novaLista]));

    setListas([...listas, novaLista]);
    setTitle("");
    setDescription("");
    setToastOpen(true);
  };

  return (
    <Form.Root className="FormRoot" onSubmit={handleSubmit}>
      <Form.Field className="FormField" name="title">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Nome da lista</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Digite um nome
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="Input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={25}
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="FormField" name="description">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Form.Label className="FormLabel">Descrição</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Digite uma descrição
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="Input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={40}
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="ButtonCreateList" style={{ marginTop: 15 }}>
          Criar lista
        </button>
      </Form.Submit>

      <ToastInfos open={toastOpen} setOpen={setToastOpen} title="Lista criada" description="Lista criada com sucesso." status="Good"/>
    </Form.Root>
  );
};

export default FormComponent;
