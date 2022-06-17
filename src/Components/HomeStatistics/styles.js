import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: red;
  width: 90%;
  padding: 24px;
  background: #0d102f;
  border-radius: 20px;
  margin: 0 auto;
  position: absolute;
  top: 70%;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    top: 85%;
    max-height: 250px;
  }

  @media screen and (min-width: 1300px) {
    top: 90%;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 416px;
  height: 130px;

  @media screen and (min-width: 500px) {
    flex-direction: column;
    height: 22vw;
    max-height: 170px;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`

export const CardImg = styled.img`
  width: 20vw;
  margin-right: 10px;

  @media screen and (min-width: 500px) {
    width: 13vw;
    max-width: 95px;
    margin: 0px;
  }

  @media screen and (min-width: 1000px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 15vw;
    max-width: 130px;
  }
`

export const CardTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 18px;
    line-height: 55.9px;
    margin-top: 5px;
    margin: 0;
    font-family: var(--body-font);
    font-weight: 400;
    color: var(--bs-white);
    line-height: 30px;
    font-weight: bold;
  }

  p {
    color: var(--head-color);
    margin: 0px;
    font-family: var(--body-font);
    width: 120px;
    text-align: center;
    font-weight: 400;
    line-height: 15px;
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }

    @media screen and (min-width: 1000px) {
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
    }
  }
`
