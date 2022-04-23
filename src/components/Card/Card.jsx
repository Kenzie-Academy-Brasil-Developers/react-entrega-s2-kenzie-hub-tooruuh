import { Container } from "./styles";

export default function Card({ title, status, onClick, id }) {

  return (
    <Container onClick={()=>onClick(id,title)} id={id}>
      <h2>{title}</h2>
      <h4>{status}</h4>
    </Container>
  );
}
