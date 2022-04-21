import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";

import KenzieLogo from "../../assets/Logo.svg";
import { Container, Content, AnimationContainer, HeaderLogin } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(6, "Minimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {

    API.post("/sessions", data)
    .then((reponse) => {
        const { token, user  } = reponse.data

        localStorage.setItem('@KenzieHub:token', JSON.stringify(token))
        localStorage.setItem('@KenzieHub:user', JSON.stringify(user))

        setAuthenticated(true)

        return history.push('/home')
      })
      .catch((err) => toast.error("Email ou senha invalido"));
  };

  const registerFunction = () => {
    return history.push("/register")
  }

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <HeaderLogin>
            <img src={KenzieLogo} alt="kenzie hub" />
          </HeaderLogin>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
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
            <Button type="submit">Entrar</Button>

            <p>Ainda não possui uma conta?</p>

            <Button whiteSchema onClick={registerFunction}>Cadastre-se</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
