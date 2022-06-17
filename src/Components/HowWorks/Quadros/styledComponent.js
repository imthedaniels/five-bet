import styled from "styled-components";

export const Divprimaria = styled.div`
  width: 83vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #120f54;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    width: 600px;
    height: 550px;
  }

  @media screen and (min-width: 990px) {
    height: 420px;
    margin-top: 5px;
    margin-bottom: 0px;
    width: 480px;
  }

  @media (min-width: 1400px) {
    width: 650px;
    height: 500px; 
  } 

  @media (min-width: 1700px) {
    width: 700px;
    height: 500px; 
  }
`;

export const H4titulo = styled.h4`
  color: white;
  margin: 0px;
  font-family: var(--body-font);
  font-size: 24px;
`;

export const ImgSports = styled.img`
  width: 77vw;
  object-fit: contain;

  @media screen and (min-width: 700px) {
    width: 570px;
  }

  @media screen and (min-width: 700px) {
    width: 90%;
  }

  @media (min-width: 1400px) {
    width: 550px;
  } 
`;
