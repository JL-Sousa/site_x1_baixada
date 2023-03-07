import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  div {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 16px;
    background-color: #22222b;
    margin: 0 auto;
    max-width: 1420px;
    border-top: 4px solid #f56217;

    button {
      background-color: #248e71;
      width: 20%;
      border: none;
      border-radius: 5px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      cursor: pointer;

      @media (max-width: 460px) {
        width: 100px;
      }
    }
  }
`;

export const InputText = styled.input`
  width: 60%;
  padding: 12px;
  border-radius: 5px;
  border: none;
`;

export const InputNumber = styled.input`
  width: 20%;
  padding: 12px;
  border-radius: 5px;
  border: none;
`;
