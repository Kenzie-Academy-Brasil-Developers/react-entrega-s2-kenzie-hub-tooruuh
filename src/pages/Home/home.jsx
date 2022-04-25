import { Redirect } from "react-router-dom";
import { Container, Navbar, Header, Linha, TecnologiasContainer, Topo, Main, NoCard } from "./styles";
import { useEffect, useState } from "react";
import KenzieLogo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { BiMessageX } from "react-icons/bi";
import Card from "../../components/Card/Card";
import ModalCadastro from "../../components/Modal/Modal";
import ModalAtualizar from "../../components/ModalAtualizar/ModalAtualizar";
import { API } from "../../services/api";
import { toast } from "react-toastify";

export default function Home({ authenticated, setAuthenticated }) {
  const [modalStatusCadastro, setModalStatusCadastro] = useState(false);
  const [modalStatusAtualizar, setModalStatusAtualizar] = useState(false);
  const [materia, setMateria] = useState([]);
  const [materiaId, setMateriaId] = useState("");
  const [nomeMateria, setNomeMateria] = useState("");
  
  const [usuario] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const history = useHistory();

  function logout() {
    setAuthenticated(false);
    localStorage.clear();
    return history.push("/");
  }

  function loadMateria() {
    API.get(`/users/${usuario.id}`).then((response) => {
      setMateria(response.data.techs);
    });
  }

  useEffect(() => {
    loadMateria();
  });

  const pegarInfo = (id,nome) => {
    setModalStatusAtualizar(true);
    setNomeMateria(nome)
    setMateriaId(id);
  };

  const excluirMateria = () => {
    API.delete(`/users/techs/${materiaId}`,    
    {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        setModalStatusAtualizar(false)
        toast.success('Tecnologia excluida com sucesso')
      })
      .catch((err) => {
        toast.error('Error ao excluir tecnologia');
      });
  };

  if (!authenticated) {
    return <Redirect to="/" />;
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
        {materia.length === 0 ? (
          <NoCard>
            <BiMessageX size={20} /> Você ainda não tem materia cadastrada...
          </NoCard>
        ) : (
          materia.map((tec, index) => (
            <Card
              key={index}
              id={tec.id}
              title={tec.title}
              status={tec.status}
              onClick={pegarInfo}
            />
          ))
        )}
      </Main>

      {modalStatusCadastro && (
        <ModalCadastro
          setModalStatusCadastro={setModalStatusCadastro}
          setMateria={setMateria}
        />
      )}

      {modalStatusAtualizar && (
        <ModalAtualizar
          onClick={excluirMateria}
          nomeMateria={nomeMateria}
          materiaId={materiaId}
          setModalStatusAtualizar={setModalStatusAtualizar}
        />
      )}
    </Container>
  );
}
