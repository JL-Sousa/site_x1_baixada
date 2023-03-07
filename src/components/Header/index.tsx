import { HeaderContainer } from "./styles";
import logo from "../../assets/logo_oficial.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

type TotalApostaProps = {
  aposta: number;
};
export function Header({ aposta }: TotalApostaProps) {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo x1 da baixada" />
      <div>
        <h3>
          Total Apostado{" "}
          <FontAwesomeIcon icon={faHandHoldingDollar} size="lg" />
        </h3>
        <p>{`${aposta} R$`}</p>
      </div>
    </HeaderContainer>
  );
}
