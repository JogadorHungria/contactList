import { Button } from "@/app/components/button";
import "@/app/dashboard/cardContacts/cardContacts.scss";
import { TContact } from "@/app/schema/contactCchema";
import { toast } from "react-toastify";

interface ICardType {
  contact: TContact;
}

const deletContactRequisition = (contact: TContact) => {
  toast(`Contato ${contact.completName} deletado com sucesso`);
};

const updateContactRequisition = (contact: TContact) => {
  toast(`Contato ${contact.completName} atualizado com sucesso`);
};

export const CardContacts = ({ contact }: ICardType) => {
  return (
    <div className="cardContacts">
      <h3>{contact.completName}</h3>
      <p>{contact.contactPhone}</p>
      <p>{contact.email}</p>
      <div className="containerButtons">
        <Button
          value="Editar"
          onclick={() => updateContactRequisition(contact)}
        />

        <Button
          value="Exluir"
          onclick={() => deletContactRequisition(contact)}
        />
      </div>
    </div>
  );
};
