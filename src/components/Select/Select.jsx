import { Container ,SelectContainer } from "./styles";

export default function Select ({ children ,label, icon: Icon, register, name, error='', ...rest }) {
  return (
    <Container>
      <div>{label} {!!error && <span> - {error}</span>}</div>

      <SelectContainer isErrored={!!error} {...register(name)}>
        {children}
      </SelectContainer>
    </Container>
  );
}