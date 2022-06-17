import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 1000px;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const IMG404 = styled.img`
  width: 95%;
  margin-top: -420px;
  margin-left: 15px;
  @media (min-width: 425px) {
    margin-top: -200px;
  }
  @media (min-width: 992px) {
    margin-top: 0px;
    width: 496px;
    margin-left: -4%;
    margin-right: 10%;
  }
  @media (min-width: 1200px) {
    margin-top: 0px;
    width: 550px;
    margin-left: -4%;
    margin-right: 10%;
  }
`;

export const DIVbase = styled.div`
  color: white;
  margin-top: 10px;
  margin-left: 15px;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const H2text = styled.h2`
  @media (min-width: 576px) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 43px;
    font-weight: 700;
  }
  @media (min-width: 1200px) {
    font-size: 57px;
  }
`;

export const Ptext = styled.p`
  @media (min-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const DIVButton = styled.div`
  width: 178px;
  height: 55px;
  border-radius: 30px;
  border: 2px solid #511bd5;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 992px) {
    width: 198px;
    height: 66px;
  }
`;
export const ButtonHome = styled.button`
  font-weight: 600;
  text-align: center;
  background-color: #571ce0;
  border: 0;
  width: 163px;
  height: 41px;
  color: white;
  border-radius: 25px;
  @media (min-width: 992px) {
    width: 184px;
    height: 52px;
    font-size: 18px;
  }
`;
