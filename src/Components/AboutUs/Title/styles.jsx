import styled from "styled-components"

export const Content = styled.div `
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: var(--bg-color);
  padding: 5%;
  padding-top: 70vw;
  padding-bottom: 15vw;
  text-align: center;

  @media screen and (min-width:400px) {
    padding-top: 250px;
    padding-bottom: 40px;
  }

  @media screen and (min-width:500px) {
    padding-top: 25vw;
  }

  @media screen and (min-width:600px) {
    padding-top: 28vw;
  }

  @media screen and (min-width:1000px) {
    padding-top: 250px;
    padding-bottom: 80px;
  }

  h5 {
    font-family: var(--body-font);
    color: var(--head-color);
    font-size: 20px;
    margin: 0;
    font-weight: 400;

    @media (min-width: 800px) {
      font-size: 30px;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
    }
  }

  h2 {
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
  }

  p {
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
      padding-left: 23vw;
      padding-right: 23vw;
      margin-top: 0.5vw;
      line-height: 35px;
    }

    @media (min-width: 1200px) {
      font-size: 22px;
    }
    
  } 
`