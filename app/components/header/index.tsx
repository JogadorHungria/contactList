import "@/app/components/header/headerStyle.scss";
import { Button } from "../button";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";

export const Header = () => {
  const { userDesloger, setShowModal } = useContext(GlobalContext);

  const newContactRequisition = () => {
    setShowModal(() => "creation");
  };

  const updatePerfilRequisition = () => {
    setShowModal(() => "perfil");
  };

  return (
    <header>
      <ul>
        <li>
          <Button onclick={newContactRequisition} value="Novo contato" />
        </li>

        <li>
          <Button onclick={updatePerfilRequisition} value="Editar perfil" />
        </li>

        <li>
          <Button onclick={userDesloger} value="Deslogar" />
        </li>
      </ul>
    </header>
  );
};
