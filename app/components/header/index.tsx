import "@/app/components/header/headerStyle.scss";
import { Button } from "../button";
import { toast } from "react-toastify";

const newContactRequisition = () => {
  toast("Novo contato criado");
};

const listContactRequisition = () => {
  toast("Listando contatos");
};

export const Header = () => {
  return (
    <header>
      <ul>
        <Button onclick={newContactRequisition} value="Novo contato" />
        <Button onclick={listContactRequisition} value="Listar contatos" />
      </ul>
    </header>
  );
};
