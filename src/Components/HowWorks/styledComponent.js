import styled from "styled-components";
import imgBG from "../../Assets/how-works-bg.png";

export const Divcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: #120f54;
  width: 100%;
  align-items: center;
  font-family: var(--body-font);
  padding-bottom: 50px;
  background-image: url(${imgBG});
  background-repeat: no-repeat;
  background-position: top;
`;

export const DivExpHowWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;

  @media screen and (min-width: 700px) {
    width: 630px;
  }
`;

export const HowWorkH5 = styled.h5`
  font-family: var(--body-font);
  color: var(--head-color);
  font-size: 20px;
  margin: 0;
  margin-top: 40px;
  font-weight: 400;

  @media (min-width: 800px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const HowWorkH2 = styled.h2`
  font-family: var(--body-font);
  color: var(--head-alt-color);
  font-size: 24px;
  margin: 0px;
  margin-top: 5px;

  @media (min-width: 800px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 35px;
  }
`;

export const HowWorkP = styled.p`

  font-family: var(--body-font);
  color: var(--bs-white);
  font-size: 17px;
  line-height: 22px;
  margin-top: 2px;
  margin-bottom: 0px;
  padding-left: 35px;
  padding-right: 35px;

  @media (min-width: 600px) {
    font-size: 18px;
    padding-left: 75px;
    padding-right: 75px;
  }

  @media (min-width: 800px) {
    font-size: 20px;
    /* padding-left: 23vw;
    padding-right: 23vw; */
    margin-top: 0.5vw;
    line-height: 35px;
  }

  @media (min-width: 1200px) {
    font-size: 22px;
  }
  

`;

export const TitleHowWork = styled.h5`
  width: 160px;
  color: white;
  font-family: var(--body-font);
  text-align: left;

   @media (min-width: 375px) {
    font-size: 16px;
  }
`;

export const DivListaHowWork = styled.div`
  display: flex;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #291b6b;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media screen and (min-width: 700px) {
    width: 630px;
  }

  @media screen and (min-width: 990px) {
    justify-content: space-evenly;
    width: 90vw; 
    flex-direction: row; 
    height: 480px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
    border-radius: 20px;
    height: 500px;
  }

  @media (min-width: 1400px) {
    width: 80vw;
    height: 600px;
  }
`;

export const ListaHowWork = styled.div`
  list-style: none;
  margin-bottom: -10px;
  margin-top: 30px;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 990px) {
    height: 420px;
    margin-top: 0px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

export const ItemListaHowWork = styled.button`
  border-radius: 8px;
  height: 75px;
  width: 80vw;
  background: #6f42c1;
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  align-items: center;
  border: 0;
  font-size: 18px;

  @media screen and (min-width: 600px) {
    width: 45%;
  }

  @media screen and (min-width: 990px) {
    height: 90px;
    width: 270px;
    justify-content: space-evenly;
    margin-top: 0px;
  }

  @media (min-width: 1400px) {
    width: 310px;
    height: 105px;
  }

  @media (min-width: 1700px) {
    width: 400px;
  }
`;

export const ImgHowWork = styled.img`
  width: 56px;
  height: 45px;
  margin-left: -6px;

  @media (min-width: 1700px) {
    width: 80px;
    height: 60px;
    margin: 5px;
  }
`;

export const SpanHowWork = styled.span`
  width: 56px;
  height: 45px;
  margin: 0;

  @media (min-width: 1700px) {
    width: 80px;
    height: 60px;
  }
`;
