import { Apostador } from "../../App";
import { Container, ContainerCard } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type ApostadorProps = {
  apostador: Apostador;
  deleteApostador: (id: number) => void;
};

export function Card({ apostador, deleteApostador }: ApostadorProps) {
  function handleDeleteApostador() {
    deleteApostador(apostador.id);
  }
  return (
    <Container>
      <ContainerCard>
        <div>
          <h2>{apostador.nome}</h2>
          <p>{`${apostador.valor} R$`}</p>
        </div>
        <button onClick={handleDeleteApostador}>
          <FontAwesomeIcon icon={faTrashCan} size="2x" />
        </button>
      </ContainerCard>
    </Container>
  );
}
