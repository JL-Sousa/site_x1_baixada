import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/global";
import { ChangeEvent, useState } from "react";
import { Container, InputText, InputNumber } from "./style_app";

export type Apostador = {
  nome: string;
  valor: number;
};

function App() {
  const [nomeInput, setNomeInput] = useState("");
  const [valorInput, setValorInput] = useState(0);
  const [totalAposta, setTotalAposta] = useState(0);
  const [listaApostadores, setListaApostadores] = useState<Apostador[]>([]);

  function adicionarApostador() {
    let valorinputAposta = valorInput;
    setListaApostadores((previousApostadores) => [
      ...previousApostadores,
      { nome: nomeInput, valor: valorinputAposta * 2 * 0.95 },
    ]);

    valorTotalAposta();
    limparFormulario();
  }

  const handleValorIput = (e: ChangeEvent<HTMLInputElement>) => {
    let valorInput: number = Number.parseInt(e.target.value);
    setValorInput(valorInput);
  };

  function valorTotalAposta() {
    let valorAtual = 0;
    listaApostadores.map((apostador) => {
      valorAtual = valorAtual + apostador.valor;
    });

    setTotalAposta(valorAtual);
  }

  function limparFormulario() {
    setNomeInput("");
    setValorInput(0);
  }

  return (
    <div>
      <Header aposta={totalAposta} />
      <Container>
        <div>
          <InputText
            placeholder="Nome do apostador"
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
          />
          <InputNumber
            type="number"
            step={50}
            placeholder="Valor"
            value={valorInput}
            onChange={handleValorIput}
          />
          <button onClick={adicionarApostador}>Adicionar</button>
        </div>
      </Container>
      {listaApostadores.map((apostadores) => (
        <Card key={apostadores.nome} apostador={apostadores} />
      ))}

      <GlobalStyle />
    </div>
  );
}

export default App;
