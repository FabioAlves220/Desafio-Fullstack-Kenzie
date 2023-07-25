import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";
import {
  AddContactData,
  AddContactSchema,
  UpdateContactData,
  UpdateContactSchema,
} from "@/schemas/contact.schema";

interface IContactFormProps {
  context: string | undefined;
  id: string | undefined;
}

const AddContactForm = ({ context = "add", id }: IContactFormProps) => {
  const { addContact, updateContact } = useAuth();

  const schema = {
    add: AddContactSchema,
    update: UpdateContactSchema,
  }[context];

  const { register, handleSubmit } = useForm<
    AddContactData | UpdateContactData
  >({
    resolver: zodResolver(schema),
  });

  const labelButton = {
    add: "Adicionar",
    update: "Atualizar",
  }[context];
  const labelTitle = {
    add: "Adicionar",
    update: "Atualizar",
  }[context];

  const onFormSubmit = (formData: AddContactData | UpdateContactData) => {
    if (context == "add") {
      addContact(formData);
    } else if (context == "update") {
      updateContact(formData, id);
    }
  };

  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">{labelTitle}:</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="name" className="user-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Nome do contato"
              className="user-form-input"
              autoComplete="off"
              {...register("name")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="user-form-label">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Email do contato"
              className="user-form-input"
              autoComplete="off"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="telefone" className="user-form-label">
            Telefone
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Telefone do contato"
              className="user-form-input"
              autoComplete="off"
              {...register("telefone")}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="user-form-button">
            {labelButton}
          </button>
        </div>
        <Link href={"/"} className="user-form-link">
          Voltar para Dashboard
        </Link>
      </form>
    </div>
  );
};

export default AddContactForm;
