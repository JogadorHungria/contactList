import { Button } from "@/app/components/button";
import { GlobalContext } from "@/app/context";
import "@/app/dashboard/cardContacts/cardContacts.scss";
import { TContact } from "@/app/schema/contactCchema";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ICardType {
  contact: TContact;
}

export const CardContacts = ({ contact }: ICardType) => {
  const { setShowModal, contactDelete } = useContext(GlobalContext);

  const editContactRequisition = () => {
    setShowModal(() => "edit");
  };

  return (
    <div className="cardContacts">
      <h3>{contact.completName}</h3>
      <p>{contact.contactPhone}</p>
      <p>{contact.email}</p>
      <div className="containerButtons">
        <Button value="Editar" onclick={editContactRequisition} />

        <Button value="Exluir" onclick={() => contactDelete(contact.id)} />
      </div>
    </div>
  );
};
