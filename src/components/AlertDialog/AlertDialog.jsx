import { AlertDialog } from "radix-ui";
import "./styles.css";

const AlertaDialog = ({ onConfirm, children }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          Tem certeza?
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          Essa ação é irreversível. Deseja mesmo excluir esta lista?
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red" onClick={onConfirm}>
              Sim, excluir
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertaDialog;
