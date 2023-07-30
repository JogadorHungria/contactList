import { Dispatch, ReactNode, SetStateAction } from "react";
import { TUser } from "../schema/userSchema";
import { TContact } from "../schema/contactCchema";

export interface iChildren {
  children: ReactNode;
}

export interface IContexGlobal {
  user: TUser | null;
  setUser: Dispatch<TUser | null>;
  showModal: string | null;
  setShowModal: Dispatch<SetStateAction<string | null>>;
  userDesloger: () => void;
  profileRequisition: () => void;
  contactDelete: (id: number) => Promise<void>;
  contactSelected: TContact | null;
  setContactSelected: Dispatch<SetStateAction<TContact | null>>;
}
