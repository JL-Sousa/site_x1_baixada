import { Apostador } from "../../App";
import { Container, ContainerCard } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

type ApostadorProps = {
  apostador: Apostador;
  deleteApostador: (id: number) => void;
};

export function Card({ apostador, deleteApostador }: ApostadorProps) {
  function handleDeleteApostador() {
    deleteApostador(apostador.id);
  }

  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    currencySign: "accounting",
    maximumFractionDigits: 2,
  }).format(apostador.valor);

  return (
    <Container>
      <ContainerCard>
        <div>
          <h2>{apostador.nome}</h2>
          <p>{valorFormatado}</p>
        </div>
        <button onClick={handleDeleteApostador}>
          <FontAwesomeIcon icon={faThumbsUp} size="2x" />
        </button>
      </ContainerCard>
    </Container>
  );
}
