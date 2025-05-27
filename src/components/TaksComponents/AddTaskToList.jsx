import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../ListComponents/Form/styles.css";

function AddTaskToList({ lista, setLista }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!lista || !title.trim()) return;

        const novaTask = {
            id: uuidv4(),
            title: title.trim(),
            done: false,
        };

        const listaAtualizada = {
            ...lista,
            tasks: [...(lista.tasks || []), novaTask],
        };

        setLista(listaAtualizada);

        const armazenadas = JSON.parse(localStorage.getItem("listas")) || [];
        const novasListas = armazenadas.map((l) =>
            l.id === listaAtualizada.id ? listaAtualizada : l
        );
        localStorage.setItem("listas", JSON.stringify(novasListas));

        setTitle("");
    };

    if (!lista) {
        return <p style={{ padding: "1rem" }}>Nenhuma lista selecionada.</p>;
    }

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
                    <Form.Label className="FormLabel">Novo item</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Digite um item
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        type="text"
                        className="Input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength={30}
                        required
                    />
                </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
                <button type="submit" className="ButtonCreateList" style={{ marginTop: 15 }}>
                    Adicionar
                </button>
            </Form.Submit>
        </Form.Root>
    );
}

export default AddTaskToList;
