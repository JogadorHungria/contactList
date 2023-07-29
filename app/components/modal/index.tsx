import "@/app/components/modal/modalStyle.scss";
import { GlobalContext } from "@/app/context";
import { useContext } from "react";

export const Modal = ({}) => {
  const { setShowModal, showModal } = useContext(GlobalContext);

  return (
    <div className="modal">
      <div>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>
  );
};
