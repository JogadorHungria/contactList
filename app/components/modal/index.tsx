import "@/app/components/modal/modalStyle.scss";
import { GlobalContext } from "@/app/context";
import { FormCreatContact } from "./formCreateContact";
import { useContext } from "react";

export const Modal = () => {
  const { setShowModal, showModal } = useContext(GlobalContext);

  return (
    <div className="modal">
      <div>
        <button onClick={() => setShowModal(null)}>X</button>

        {showModal! == "creation" && <FormCreatContact />}
      </div>
    </div>
  );
};
