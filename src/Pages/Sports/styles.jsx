import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;

  ul {
    width: 90vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    margin-top: 50px;
    list-style: none;
    padding: 0px;

    @media screen and (min-width: 730px) {
      align-items: center;
    }

    @media screen and (min-width: 1350px) {
      flex-direction: row;
      width: 90vw;
    }

    @media screen and (min-width: 1500px) {
      flex-direction: row;
      width: 90vw;
    } 
  }
`