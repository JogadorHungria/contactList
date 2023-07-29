"use client";
import "app/dashboard/dashboardStyle.scss";
import { Header } from "../components/header";
import { useContext, useEffect } from "react";
import { CardContacts } from "./cardContacts";
import { GlobalContext } from "../context";
import { Modal } from "../components/modal";
import { TContact } from "../schema/contactCchema";

const DashBoard = () => {
  const { user, profileRequisition, showModal } = useContext(GlobalContext);

  useEffect(() => {
    profileRequisition();
  }, []);

  return (
    user && (
      <>
        <Header />

        {showModal && <Modal />}
        <main>
          <h2>Contatos</h2>

          <section>
            {user.contacts.length > 0 ? null : (
              <h1>Cadastre um novo contato!</h1>
            )}
            {user &&
              user.contacts.map((contact: TContact) => (
                <CardContacts key={contact.id} contact={contact} />
              ))}
          </section>
        </main>
      </>
    )
  );
};

export default DashBoard;
