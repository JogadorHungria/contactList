import "@/app/components/modal/formCreateContact/formCreat.scss";
import { useForm } from "react-hook-form";
import { Input } from "../../input";
import {
  TContact,
  TContactCreation,
  contactCreationSchema,
} from "@/app/schema/contactCchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { api } from "@/app/services/api";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "@/app/context";
import { TUser } from "@/app/schema/userSchema";

export const FormCreatContact = () => {
  const { user, setUser, setShowModal } = useContext(GlobalContext);

  const creatNewContactRequisition = async (data: any) => {
    const token = localStorage.getItem("@contactList:token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await api.post("/contacts", data);

      const newContactList: TContact[] = [...user.contacts, response.data];

      const newUser: TUser = user;

      newUser.contacts = newContactList;

      setUser(newUser);
      setShowModal(null);
    } catch (err) {
      location.replace("/");
      if (axios.isAxiosError(err)) {
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactCreation>({
    resolver: zodResolver(contactCreationSchema),
  });

  return (
    <form onSubmit={handleSubmit(creatNewContactRequisition)}>
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
  );
};
function setUser(data: any) {
  throw new Error("Function not implemented.");
}
