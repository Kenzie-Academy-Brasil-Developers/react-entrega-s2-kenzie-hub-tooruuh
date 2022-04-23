import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../Button/Button";
import { ModalContainer, Content, Topo, FormContainer } from "./styles";
import "../ModalAtualizar/modal.css";

import Input from "../Input/input";
import Select from "../Select/Select";

export default function ModalAtualizar({
  setModalStatusAtualizar,
  onClick,
  nomeMateria,
  materiaId
}) {
  const [statusCriar] = useState(["Iniciante", "Intermediário", "Avançado"]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {

  },[])

  const onSubmitFunction = (data) => {

    API.put(`/users/techs/${materiaId}`, 
    {
      status: data.status
    }, 
    {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setModalStatusAtualizar(false);
        toast.success("Tecnologia atualizada com sucesso");
      })
      .catch((err) => {
        toast.error("Error ao atualizar tecnologia");
      });
  };

  return (
    <ModalContainer>
      <Content>
        <Topo>
          <h1>Tecnologia Detalhes</h1>
          <Button onClick={() => setModalStatusAtualizar(false)}>X</Button>
        </Topo>

        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            id="modal"
            label="Nome do projeto"
            placeholder={nomeMateria}
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
            <Button id="excluir" onClick={onClick}>
              Excluir
            </Button>
          </section>
        </FormContainer>
      </Content>
    </ModalContainer>
  );
}
