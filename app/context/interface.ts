import { Dispatch, ReactNode, SetStateAction } from "react";
import { TUser } from "../schema/userSchema";

export interface iChildren {
  children: ReactNode;
}

export interface IContexGlobal {
  user: any;
  setUser: Dispatch<TUser | null>;
  showModal: string | null;
  setShowModal: Dispatch<SetStateAction<string | null>>;
  userDesloger: () => void;
  profileRequisition: () => void;
  contactDelete: (id: number) => Promise<void>;
}
