import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color);
  width: 100vw;
`;

export const Div = styled.div `
  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 990px) {
    margin-left: 30px;
  }
`

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 87vw;
  margin: auto;

  @media screen and (min-width: 990px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;