import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";

import KenzieLogo from "../../assets/Logo.svg";
import { Container, Content, AnimationContainer, HeaderLogin } from "./styles";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Select from "../../components/Select/Select";

export default function Register({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Minimo de 6 digitos"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio = "...",
    contact = "...",
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };
    API.post("/users", user)
      .then((response) => {
        console.log(response);

        toast.success("Sucesso ao criar a conta");
        return history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  const registerFunction = () => {
    return history.push("/");
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <HeaderLogin>
            <img src={KenzieLogo} alt="kenzie hub" />
            <Button onClick={registerFunction}>Voltar</Button>
          </HeaderLogin>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Crie sua conta</h1>
            <h4>Rapido e grátis, vamos nessa</h4>
            <Input
              icon={FiUser}
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              icon={FiMail}
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              register={register}
              name="password"
              error={errors.password?.message}
            />
            <Input
              icon={FiLock}
              label="Confirmar senha"
              placeholder="Digite novamente sua senha"
              type="password"
              register={register}
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />

            <Select 
            register={register}
            label="Selecionar módulo"
            name="course_module"
            error={errors.course_module?.message}
            >
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </Select>

            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
