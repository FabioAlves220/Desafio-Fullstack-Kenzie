import { useAuth } from "@/contexts/authContext";
import {
  UserData,
  loginSchema,
  userscherma,
  registerUserSchema,
  RegisterUserData,
} from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { formToJSON } from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterUserData>({
    resolver: zodResolver(registerUserSchema),
  });

  const { register: registerUser } = useAuth();

  const onFormSubmit = (FormData: RegisterUserData) => {
    console.log("teste");
    registerUser(FormData);
    console.log(FormData);
  };

  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">Fazer cadastro</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="name" className="user-form-label">
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Seu Nome"
              className="user-form-input"
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
              placeholder="Seu Email"
              className="user-form-input"
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
              placeholder="Seu Telefone"
              className="user-form-input"
              {...register("telefone")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="user-form-label">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Sua senha"
              className="user-form-input"
              {...register("password")}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="user-form-button">
            Cadastrar
          </button>
        </div>
        <Link href={"/login "} className="user-form-link">
          Ir para o Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
