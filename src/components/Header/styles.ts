import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #22222b;

  h1 {
    color: #f56217;
  }

  img {
    width: 64px;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #f56217;
      font-size: 1rem;
    }
    p {
      color: #00b34c;
      font-weight: 700;
      padding: 5 px;
    }
  }
`;
