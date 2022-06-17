import styled from 'styled-components'

export const Container = styled.div `
  background-color: var(--bs-blue);
  width: 90vw;
  margin: auto;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: -70px;

  h1 {
    font-family: var(--body-font);
    color: var(--bs-white);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 80px;
  }

  @media screen and (min-width: 730px) {
    width: 658px;
  }

  @media screen and (min-width: 1350px) {
    width: 90vw;
    height: 280px;

    h1 {
      height: 135px;
      font-size: 40px;
    }
  } 
`
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  margin: auto;

  input {
    font-family: var(--body-font);
    background-color:  var(--bs-blue);
    border: 1px solid var(--bs-white);
    border-radius: 8px;
    color: var(--bs-white);
    height: 50px;
    width: 75vw;
    padding: 10px;
    font-size: 18px;
  }

  input::placeholder {
    color: var(--bs-white);
  }

  @media screen and (min-width: 730px) {
    input {
      width: 547px;
    }
  }

  @media screen and (min-width: 1350px) {
    flex-direction: row;

    input {
      width: 24vw;
      margin: 15px;
      height: 70px;
    }
  }
`