import { HeaderContainer } from "./styles";
import logo from "../../assets/logo_oficial.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

type TotalApostaProps = {
  aposta: number;
};
export function Header({ aposta }: TotalApostaProps) {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    currencySign: "accounting",
    maximumFractionDigits: 2,
  }).format(aposta);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo x1 da baixada" />
      <h1>Preto x Teco Muller</h1>
      <div>
        <h3>
          <FontAwesomeIcon icon={faHandHoldingDollar} size="lg" />
          Total Apostado
        </h3>
        <p>{valorFormatado}</p>
      </div>
    </HeaderContainer>
  );
}
