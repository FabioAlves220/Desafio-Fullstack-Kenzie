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

interface HomeProps {
  user: UserData;
  contacts: ContactData[];
}

const Home: NextPage<HomeProps> = ({ user, contacts }) => {
  console.log("user:", user);

  return (
    <main
      className={`body justify-center flex min-h-screen flex-col items-center p-24`}
    >
      <div>
        <button
          className={`m-8 px-3 h-auto w-auto text-2xl bg-pink-800 rounded-lg`}
          onClick={() => {
            router.push({
              pathname: "/contacts",
              query: {
                context: "add",
              },
            });
          }}
        >
          Adicionar Contato
        </button>
        <button
          className={`m-8 px-3 h-auto w-auto text-2xl bg-pink-800 rounded-lg`}
          onClick={() => {
            nookies.destroy(null, "fullstackProject.token", { path: "/" });
            router.push("/login");
          }}
        >
          Logout
        </button>
      </div>
      <UserCard key={user.id} user={user}></UserCard>
      <div className={`m-4 flex flex-wrap flex-row`}>
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
