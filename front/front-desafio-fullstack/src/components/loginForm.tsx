import { LoginData, loginSchema, userscherma } from "@/schemas/user.schema";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/authContext";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onFormSubmit = (formData: LoginData) => {
    login(formData);
  };

  return (
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">LOGIN</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email" className="user-form-label">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              placeholder="examplo@mail.com"
              className="user-form-input"
              autoComplete="off"
              {...register("email")}
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
        <div className="flex justify-center">
          <button type="submit" className="user-form-button">
            ENTRAR
          </button>
        </div>
        <Link href={"/register "} className="user-form-link">
          Não é cadastrado ainda? Clique Aqui
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
