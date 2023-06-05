// import LoginForm from "@/components/loginForm";
import { NextPage } from "next";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";

const Delete: NextPage = () => {
  const router = useRouter();

  const { deleteContact } = useAuth();
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <h1> Deseja realmente deletar esse contato?</h1>
      <button
        className={`m-8 px-3 h-auto w-auto text-2xl bg-red-600 rounded-lg`}
        onClick={() => {
          deleteContact(router.query.id);
          router.push("/");
        }}
      >
        SIM
      </button>
      <button
        className={`m-8 px-3 h-auto w-auto text-2xl bg-green-600 rounded-lg`}
        onClick={() => {
          router.push("/");
        }}
      >
        NÃO
      </button>
    </main>
  );
};

export default Delete;
