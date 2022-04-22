import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../Button/Button";
import { ModalContainer, Content, Topo, FormContainer } from "./styles";

import Input from "../Input/input";
import Select from "../Select/Select";

export default function ModalAtualizar({ setModalStatusAtualizar }) {
  const [statusCriar] = useState(["Iniciante", "Intermediário", "Avançado"]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [usuario] = useState(
      JSON.parse(localStorage.getItem("@KenzieHub:user")) || ""
      );
      console.log(usuario);
      
      const schema = yup.object().shape({
          title: yup.string().required("Campo obrigatório!"),
    status: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmitFunction = (data) => {
    API.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        toast.success("Tecnologia criada com sucesso");
        setModalStatusAtualizar(false);
      })
      .catch((err) => {
        toast.error("Error ao criar nova tecnologia");
      });
  };

  return (
    <ModalContainer>
      <Content>
        <Topo>
          <h1>Tecnologia Detalhes</h1>
          <Button
            onClick={() => {
              setModalStatusAtualizar(false);
            }}
          >
            X
          </Button>
        </Topo>

        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Nome do projeto"
            placeholder="Material UI"
            register={register}
            name="title"
            error={errors.title?.message}
          />

          <Select
            register={register}
            label="Status"
            name="status"
            error={errors.status?.message}
          >
            {statusCriar.map((status, index) => {
              return <option key={index}>{status}</option>;
            })}
          </Select>
          <section>
            <Button type="submit">Salvar alterações</Button>
            <Button id='excluir'>Excluir</Button>
            
          </section>
        </FormContainer>
      </Content>
    </ModalContainer>
  );
}
