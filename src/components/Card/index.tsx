import { Apostador } from "../../App";
import { Container, ContainerCard } from "./style";

type ApostadorProps = {
  apostador: Apostador;
};

export function Card({ apostador }: ApostadorProps) {
  return (
    <Container>
      <ContainerCard>
        <div>
          <h2>{apostador.nome}</h2>
          <p>{`${apostador.valor} R$`}</p>
        </div>
        <button>Excluir</button>
      </ContainerCard>
    </Container>
  );
}
