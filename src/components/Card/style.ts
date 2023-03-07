import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  margin-top: 16px;
`;

export const ContainerCard = styled.div`
  background-color: #4f4f60;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 4px;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  border-bottom: 2px solid #f56217;
  max-width: 1420px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 36px;
  }

  div p {
    font-size: 1.2rem;
  }

  div h2 {
    font-size: 1rem;
  }

  @media (max-width: 1420px) {
    margin: 0 8px;

    div p {
      font-size: 1rem;
    }

    div h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 460px) {
    padding: 0.25rem;
  }
`;
