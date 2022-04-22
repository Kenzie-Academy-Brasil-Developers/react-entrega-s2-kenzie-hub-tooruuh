import { Container } from "./styles";

export default function Card({ title, status, onClick }) {
  return (
    <Container onClick={onClick}>
        <h2>{title}</h2>
        <h4>{status}</h4>
    </Container>
  );
}
