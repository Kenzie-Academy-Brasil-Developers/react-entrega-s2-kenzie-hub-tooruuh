import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import {
  Container,
  Navbar,
  Header,
  Linha,
  TecnologiasContainer,
  Topo,
  Main,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { API } from "../../services/api";

import KenzieLogo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";

export default function Home({ authenticated, setAuthenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [usuario] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
  );

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  /*   function loadTasks() {
    API
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {})
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadTasks();
  });

  const onSubmit = ({ task }) => {
    if (!task) {
      return toast.error("Complete o campo para enviar uma tarefa");
    }

    API
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTasks());
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);

    API.put(
      `/task/${id}`,
      { completed: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => setTasks(newTasks));
  }; */

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
          <Button>+</Button>
        </Topo>
      </TecnologiasContainer>

      <Main>
        <div>
          <h2>React JS</h2>
          <h4>Intermediário</h4>
        </div>

        <div>
          <h2>React JS</h2>
          <h4>Intermediário</h4>
        </div>

        <div>
          <h2>React JS</h2>
          <h4>Intermediário</h4>
        </div>

        <div>
          <h2>React JS</h2>
          <h4>Intermediário</h4>
        </div>

        <div>
          <h2>React JS</h2>
          <h4>Intermediário</h4>
        </div>
      </Main>
    </Container>
  );
}
