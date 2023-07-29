"use client";
import "app/dashboard/dashboardStyle.scss";
import { Header } from "../components/header";
import { useContext, useEffect } from "react";
import { CardContacts } from "./cardContacts";
import { GlobalContext } from "../context";

const DashBoard = () => {
  const { user, profileRequisition } = useContext(GlobalContext);

  useEffect(() => {
    profileRequisition();
  }, []);

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
