"use client";
import "app/dashboard/dashboardStyle.scss";
import { Header } from "../components/header";
import { useContext, useEffect } from "react";
import { CardContacts } from "./cardContacts";
import { GlobalContext } from "../context";
import { Modal } from "../components/modal";

const DashBoard = () => {
  const { user, profileRequisition, showModal } = useContext(GlobalContext);

  useEffect(() => {
    profileRequisition();
  }, []);

  return (
    <>
      <Header />
      {showModal && <Modal />}
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
