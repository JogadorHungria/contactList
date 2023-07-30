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

export const UpdateUser = () => {
  const { user, setUser, setShowModal, contactSelected } =
    useContext(GlobalContext);

  const updateContactRequisition = async (data: any) => {
    const token = localStorage.getItem("@contactList:token");

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const newData = { ...user, ...data };

      const response = await api.patch("/users", newData);

      setUser(response.data);
      console.log(response.data);
      toast("Perfil atualizado");
      setShowModal(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast(err.response?.data.message);
        console.error(err.response?.data.message);
      } else {
        console.error("Erro desconhecido:", err);
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
      <h4>Editar perfil</h4>
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
