import "@/app/components/header/headerStyle.scss";
import { Button } from "../button";

const teste = () => {
  console.log("teste");
};

export const Header = () => {
  return (
    <header>
      <ul>
        <Button onclick={teste} value="Novo contato" />
        <Button onclick={teste} value="Listar contatos" />
        <Button onclick={teste} value="Excluir Contato" />
      </ul>
    </header>
  );
};
