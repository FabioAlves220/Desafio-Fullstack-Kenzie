import React from "react";
import { ContactData } from "@/schemas/contact.schema";
import { UserData } from "@/schemas/user.schema";
import router, { useRouter } from "next/router";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { IconType } from "react-icons";

interface IUserCardProps {
  user: UserData;
}
interface IContactsCardProps {
  contact: ContactData;
}

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <div className="flex flex-row justify-items-end w-auto h-auto rounded-lg">
      <div className="flex flex-col items-center min-w-56">
        <div>
          <p className="text-4xl">Olá {user.name}.</p>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ contact }: IContactsCardProps) => {
  const updateContactButton: IconType = CiEdit;
  const deleteContactButton: IconType = BsTrash;

  return (
    <div className="user-form-container w-1/6 h-2/6 p-0 mb-1 mt-1">
      <div className="flex flex-row items-center min-w-56 gap-20">
        <div>
          <p className="m-3 text-2xl">{contact.name}</p>
          <p className="m-3 text-x1">{contact.email}</p>
          <p className="m-3 text-x1">{contact.telefone}</p>
        </div>
        <div className="buttons-box">
          <button
            className="text-3xl flex justify-center items-center h-9 w-9 rounded-full border border-black hover:bg-black hover:text-white"
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
            {React.createElement(updateContactButton)}
          </button>
          <button
            className="text-2xl flex justify-center items-center w-9 h-9 rounded-full border border-black hover:bg-white hover:text-red-600"
            onClick={() => {
              router.push({
                pathname: "/delete",
                query: {
                  id: contact.id,
                },
              });
            }}
          >
            {React.createElement(deleteContactButton)}
          </button>
        </div>
      </div>
    </div>
  );
};

export { UserCard, ContactCard };
