"use client";

import { createContext, useState } from "react";
import { IContexGlobal, iChildren } from "./interface";
import { api } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { TUser } from "../schema/userSchema";
import { TContact } from "../schema/contactCchema";

export const GlobalContext = createContext({} as IContexGlobal);

export const GlobalProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<TUser | null>(null);

  const [showModal, setShowModal] = useState<string | null>(null);
  const [contactSelected, setContactSelected] = useState<TContact | null>(null);

  const profileRequisition = async () => {
    const token = localStorage.getItem("@contactList:token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await api.get<any>("/users/profile");

      setUser(response.data);
    } catch (err) {
      location.replace("/");
      if (axios.isAxiosError(err)) {
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  const contactDelete = async (id: number) => {
    const token = localStorage.getItem("@contactList:token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      await api.delete<any>(`/contacts/${id}`);

      const newContactList: any = { ...user };
      newContactList.contacts = user?.contacts.filter(
        (contact) => contact.id != id
      );

      setUser(newContactList);
    } catch (err) {
      location.replace("/");
      if (axios.isAxiosError(err)) {
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  const userDesloger = () => {
    localStorage.clear();
    toast("Deslogando");
    setTimeout(() => {
      location.replace("/");
    }, 2400);
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        showModal,
        setShowModal,
        userDesloger,
        profileRequisition,
        contactDelete,
        contactSelected,
        setContactSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
