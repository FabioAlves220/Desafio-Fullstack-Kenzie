import React from "react";
import { UserData } from "@/schemas/user.schema";
import { GetServerSideProps, NextPage } from "next";
import api from "../services/api";
import { UserCard, ContactCard } from "@/components/card";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { Router } from "next/router";
import nookies from "nookies";
import jwt_decode from "jwt-decode";
import { ContactData } from "@/schemas/contact.schema";
import { LiaPowerOffSolid } from "react-icons/lia";
import { IconType } from "react-icons";

interface HomeProps {
  user: UserData;
  contacts: ContactData[];
}

const Home: NextPage<HomeProps> = ({ user, contacts }) => {
  const logOutButton: IconType = LiaPowerOffSolid;
  return (
    <main
      className={`body-main justify-between flex flex-col min-h-screen items-center py-10`}
    >
      <div className="user-form-container p-0 min-h-[300px]">
        <UserCard key={user.id} user={user}></UserCard>
        <div className="flex flex-col items-center ">
          <button
            className="user-form-button w-auto m-0"
            onClick={() => {
              router.push({
                pathname: "/contacts",
                query: {
                  context: "add",
                },
              });
            }}
          >
            Adicionar novo contato
          </button>
          <button
            className="user-form-button text-2xl w-auto mt-10 hover:text-red-600"
            onClick={() => {
              nookies.destroy(null, "fullstackProject.token", { path: "/" });
              router.push("/login");
            }}
          >
            {React.createElement(logOutButton)}
          </button>
        </div>
      </div>
      <div
        className={`desktop:w-[80%] desktop:max-w-[976px] desktop:mx-auto desktop:flex desktop:flex-wrap desktop:flex-row desktop:items-start gap-2 mt-16`}
      >
        {contacts.map((item: ContactData) => (
          <ContactCard key={item.id} contact={item}></ContactCard>
        ))}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const coockies = nookies.get(ctx);
    const token = coockies["fullstackProject.token"];
    const userData: any = jwt_decode(coockies["fullstackProject.token"]);
    const user = await api.get(`/users/${userData.sub}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const contacts = await api.get(`/contacts/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      props: { user: user.data, contacts: contacts.data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
};

export default Home;
