import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { GlobalStyle } from "./styles/global";
import { ChangeEvent, useEffect, useState } from "react";
import { Container, InputText, InputNumber } from "./style_app";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export type Apostador = {
  id: number;
  nome: string;
  valor: number;
};

function App() {
  const [nomeInput, setNomeInput] = useState("");
  const [valorInput, setValorInput] = useState(50);
  const [totalAposta, setTotalAposta] = useState(0);
  const [listaApostadores, setListaApostadores] = useState<Apostador[]>([]);

  function adicionarApostador() {
    let valorinputAposta = valorInput;
    if (nomeInput != "" && valorInput >= 50) {
      setListaApostadores((previousApostadores) => [
        ...previousApostadores,
        {
          id: Math.random(),
          nome: nomeInput,
          valor: valorinputAposta, // * 2 * 0.95
        },
      ]);

      setTotalAposta(totalAposta + valorinputAposta);

      limparFormulario();
      return;
    }

    alert("preencha o nome e adicione um valor igual ou maior a 50,00 R$");
  }

  const handleValorIput = (e: ChangeEvent<HTMLInputElement>) => {
    let valorInput: number = Number.parseInt(e.target.value);
    setValorInput(valorInput);
  };

  function limparFormulario() {
    setNomeInput("");
    setValorInput(50);
  }

  function deletarApostador(id: number) {
    setListaApostadores((previousApostadores) =>
      previousApostadores.filter((apostador) => apostador.id != id)
    );
    setTotalAposta(0);
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
          <button onClick={adicionarApostador}>
            Adicionar
            <FontAwesomeIcon icon={faCircleCheck} size="lg" />
          </button>
        </div>
      </Container>
      {listaApostadores.map((apostadores) => (
        <Card
          key={apostadores.id}
          apostador={apostadores}
          deleteApostador={deletarApostador}
        />
      ))}

      <GlobalStyle />
    </div>
  );
}

export default App;
