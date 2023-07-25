// import LoginForm from "@/components/loginForm";
import { NextPage } from "next";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";

const Delete: NextPage = () => {
  const router = useRouter();

  const { deleteContact } = useAuth();
  return (
    <main className="body-main min-h-screen flex items-center justify-center">
      <div className="w-auto h-auto bg-black p-2 flex flex-row items-center justify-center rounded-md gap-4">
        <h1 className="text-white"> Deseja realmente deletar esse contato?</h1>
        <button
          className={`px-3 h-auto w-auto text-2xl bg-red-600 rounded-lg`}
          onClick={() => {
            deleteContact(router.query.id);
            router.push("/");
          }}
        >
          SIM
        </button>
        <button
          className={`px-3 h-auto w-auto text-2xl bg-green-600 rounded-lg`}
          onClick={() => {
            router.push("/");
          }}
        >
          NÃO
        </button>
      </div>
    </main>
  );
};

export default Delete;
