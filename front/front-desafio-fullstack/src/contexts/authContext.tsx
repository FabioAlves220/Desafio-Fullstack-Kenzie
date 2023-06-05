import { toast } from "react-toastify";
import { LoginData, RegisterUserData, UserData } from "@/schemas/user.schema";
import api from "@/services/api";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext } from "react";
import { setCookie, parseCookies } from "nookies";
import jwt_decode from "jwt-decode";
import {
  AddContactData,
  ContactData,
  ContactSchema,
  UpdateContactData,
} from "@/schemas/contact.schema";

interface Props {
  children: ReactNode;
}

interface authProviderData {
  register: (userData: RegisterUserData) => void;
  login: (loginData: LoginData) => void;
  addContact: (ContactData: AddContactData) => void;
  updateContact: (ContactData: AddContactData, id: string) => void;
  deleteContact: (id: string) => void;
}

const AuthContext = createContext<authProviderData>({} as authProviderData);

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const register = (userData: RegisterUserData) => {
    api
      .post("/users", userData)
      .then(() => {
        toast.success("usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar usuário! Tente utilizar outro email", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const login = (loginData: LoginData) => {
    api
      .post("/login", loginData)
      .then(async (response) => {
        setCookie(null, "fullstackProject.token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
      })
      .then(() => {
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push(`/`);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Erro ao logar, verifique se o email e a senha estão corretos!",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  };

  const addContact = (ContactData: AddContactData) => {
    console.log("contactdata:", ContactData);
    const cookies = parseCookies();
    const token = cookies["fullstackProject.token"];
    api
      .post("/contacts", ContactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("contato cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      });
  };

  const updateContact = (ContactData: UpdateContactData | {}, id: string) => {
    console.log("contactdata:", ContactData);
    const payload: UpdateContactData = {};
    for (let prop in ContactData) {
      if (ContactData[prop] !== "") {
        payload[prop] = ContactData[prop];
      }
    }
    const cookies = parseCookies();
    const token = cookies["fullstackProject.token"];
    api
      .patch(`/contacts/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("contato cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      });
  };

  const deleteContact = (id: string) => {
    const cookies = parseCookies();
    const token = cookies["fullstackProject.token"];
    api
      .delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("contato deletado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      });
  };
  return (
    <AuthContext.Provider
      value={{ register, login, addContact, updateContact, deleteContact }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
