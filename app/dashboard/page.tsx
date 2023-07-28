"use client";
import "app/dashboard/dashboardStyle.scss";
import { Header } from "../components/header";
import { api } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CardContacts } from "./cardContacts";

const DashBoard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const profileRequisition = async () => {
      const token = localStorage.getItem("@contactList:token");

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const response = await api.get<any>("/users/profile");

        setUser(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          toast(err.response?.data.message);
        } else {
          console.log("Erro desconhecido:", err);
        }
      }
    };
    profileRequisition();
  }, []);

  console.log(user);

  return (
    <>
      <Header />
      <main>
        <h2>Contatos</h2>

        <section>
          {user &&
            user.contacts.map((contact: any) => (
              <CardContacts key={contact.id} contact={contact} />
            ))}
        </section>
      </main>
    </>
  );
};

export default DashBoard;
