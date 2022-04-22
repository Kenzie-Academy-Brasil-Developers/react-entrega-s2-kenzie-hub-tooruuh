import { Redirect } from "react-router-dom";
import { Container, Navbar, Header, Linha, TecnologiasContainer, Topo, Main } from "./styles";
import { useState } from "react";
import KenzieLogo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";
import ModalCadastro from "../../components/Modal/Modal";
import ModalAtualizar from "../../components/ModalAtualizar/ModalAtualizar";

export default function Home({ authenticated, setAuthenticated }) {

  const [modalStatusCadastro, setModalStatusCadastro] = useState(false);
  const [modalStatusAtualizar, setModalStatusAtualizar] = useState(false);

  const [usuario] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const history = useHistory();

  function logout() {
    setAuthenticated(false);
    localStorage.clear();
    return history.push("/");
  }

  if (!authenticated) {
    return <Redirect to="/home" />;
  }



  return (
    <Container>
      <Navbar>
        <img src={KenzieLogo} alt="kenzie Hub" />
        <Button whiteSchema onClick={logout}>
          Sair
        </Button>
      </Navbar>

      <Linha />

      <Header>
        <h1>Olá, {usuario.name}</h1>
        <h4>{usuario.course_module}</h4>
      </Header>

      <Linha />

      <TecnologiasContainer>
        <Topo>
          <h1>Tecnologias</h1>
          <Button onClick={() => setModalStatusCadastro(true)}>+</Button>
        </Topo>
      </TecnologiasContainer>

      <Main>
        {[
          { title: "React", status: "Iniciante" },
          { title: "React", status: "Iniciante" },
          { title: "React", status: "Iniciante" },
        ].map((tec, index) => (
          <Card key={index} title={tec.title} status={tec.status} onClick={()=>setModalStatusAtualizar(true)}/>
        ))}
      </Main>

      {modalStatusCadastro && (
        <ModalCadastro setModalStatusCadastro={setModalStatusCadastro} />
      )}

      {modalStatusAtualizar && (
        <ModalAtualizar setModalStatusAtualizar={setModalStatusAtualizar} />
      )}
    </Container>
  );
}
