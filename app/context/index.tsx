"use client";

import { createContext, useState } from "react";
import { IContexGlobal, iChildren } from "./interface";
import { api } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const GlobalContext = createContext({} as IContexGlobal);

export const GlobalProvider = ({ children }: iChildren) => {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean | null>(null);

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

  const userDesloger = () => {
    localStorage.clear();
    toast("Deslogando");
    setTimeout(() => {
      router.push("/");
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
