import { ContactData } from "@/schemas/contact.schema";
import { UserData } from "@/schemas/user.schema";
import router, { useRouter } from "next/router";

interface IUserCardProps {
  user: UserData;
}
interface IContactsCardProps {
  contact: ContactData;
}

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <div className="flex flex-row justify-items-end bg-pink-800 w-72 h-auto rounded-lg">
      <div className="flex flex-col items-center min-w-56">
        <div>
          <p className="m-3 text-2xl">Bem-vindo, {user.name}</p>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ contact }: IContactsCardProps) => {
  return (
    <div className="flex flex-wrap flex-row justify-items-end bg-pink-800/70 w-auto h-auto rounded-lg m-1">
      <div className="flex flex-col items-center min-w-56">
        <div>
          <p className="m-3 text-2xl">{contact.name}</p>
          <p className="m-3 text-x1">{contact.email}</p>
          <p className="m-3 text-x1">{contact.telefone}</p>
        </div>
        <button
          className="bg-green-400 rounded-lg m-1"
          onClick={() =>
            router.push({
              pathname: "/contacts",
              query: {
                context: "update",
                id: contact.id,
              },
            })
          }
        >
          Atualizar Contato
        </button>
        <button
          className="bg-red-500 rounded-lg m-1"
          onClick={() => {
            router.push({
              pathname: "/delete",
              query: {
                id: contact.id,
              },
            });
          }}
        >
          Deletar Contato
        </button>
      </div>
    </div>
  );
};

export { UserCard, ContactCard };
