import "@/app/components/modal/formUpdateContact/formUpdate.scss";
import { useForm } from "react-hook-form";
import { Input } from "../../input";
import {
  TContactCreation,
  updateContactSchema,
} from "@/app/schema/contactCchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { api } from "@/app/services/api";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";

export const UpdateContact = () => {
  const { user, setUser, setShowModal, contactSelected } =
    useContext(GlobalContext);

  const updateContactRequisition = async (data: any) => {
    const token = localStorage.getItem("@contactList:token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const newContact = {
        ...contactSelected,
        ...data,
      };

      const response = await api.patch(
        `/contacts/${contactSelected?.id}`,
        newContact
      );

      const newUserContactList = user!.contacts.filter((contact) => {
        return contact.id != newContact.id;
      });

      newUserContactList.unshift(newContact);

      const newUserData = user;

      newUserData!.contacts = newUserContactList;
      setUser(newUserData);
      toast("Contato atualizado");
      setShowModal(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response);
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<TContactCreation>({
    resolver: zodResolver(updateContactSchema),
  });

  return (
    <>
      <h4>Editar</h4>
      <form onSubmit={handleSubmit(updateContactRequisition)}>
        <Input
          labelName="Nome completo"
          name="completName"
          register={register}
          type="text"
          error={errors.completName?.message}
        />

        <Input
          labelName="Email"
          name="email"
          register={register}
          type="text"
          error={errors.email?.message}
        />

        <Input
          labelName="Telefone para contato"
          name="contactPhone"
          register={register}
          type="text"
          error={errors.contactPhone?.message}
        />

        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
};
