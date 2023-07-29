import "@/app/components/header/headerStyle.scss";
import { Button } from "../button";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";

const newContactRequisition = () => {
  toast("Novo contato criado");
};

const listContactRequisition = () => {
  toast("Listando contatos");
};

export const Header = () => {
  const { userDesloger } = useContext(GlobalContext);

  return (
    <header>
      <ul>
        <li>
          <Button onclick={newContactRequisition} value="Novo contato" />
        </li>
        <li>
          <Button onclick={listContactRequisition} value="Listar contatos" />
        </li>
        <li>
          <Button onclick={userDesloger} value="Deslogar" />
        </li>
      </ul>
    </header>
  );
};
