import { Dispatch, ReactNode, SetStateAction } from "react";

export interface iChildren {
  children: ReactNode;
}

export interface IContexGlobal {
  user: any;
  setUser: Dispatch<any>;
  showModal: boolean | null;
  setShowModal: Dispatch<SetStateAction<boolean | null>>;
  userDesloger: () => void;
  profileRequisition: () => void;
}
