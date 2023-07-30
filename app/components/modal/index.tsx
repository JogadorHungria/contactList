import "@/app/components/modal/modalStyle.scss";
import { GlobalContext } from "@/app/context";
import { FormCreatContact } from "./formCreateContact";
import { useContext } from "react";
import { UpdateContact } from "./formUpdateContact";
import { UpdateUser } from "./formUpdateUser";

export const Modal = () => {
  const { setShowModal, showModal } = useContext(GlobalContext);

  return (
    <div className="modal">
      <div>
        <button onClick={() => setShowModal(null)}>X</button>

        {showModal! == "creation" && <FormCreatContact />}
        {showModal! == "update" && <UpdateContact />}
        {showModal! == "perfil" && <UpdateUser />}
      </div>
    </div>
  );
};
