import { HeaderContainer } from "./styles";
import logo from "../../assets/logo_oficial.jpeg";

type TotalApostaProps = {
  aposta: number;
};
export function Header({ aposta }: TotalApostaProps) {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo x1 da baixada" />
      <div>
        <h3>Total Apostado</h3>
        <p>{`${aposta} R$`}</p>
      </div>
    </HeaderContainer>
  );
}
