import styled from 'styled-components'

export const Container = styled.div `
  color: var(--bs-white);

  select {
    background-color: #382590;
    border: 1px solid var(--bs-light);
    border-radius: 8px;
    color: var(--bs-light);
    height: 50px;
    width: 90vw;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 15px;
  }

  button {
    background-color: var(--hover-color);
    border: 2px solid var(--hover-color);
    border-radius: 5px;
    width: 200px;
    height: 50px;
    color: var(--bs-light);
    font-size: 16px;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  label {
    margin-bottom: 5px;
  }

  ul {
    padding: 0px;
    background-color: #382590;
    text-align: center;
    width: 630px;
    overflow-y: auto;
    margin: auto;
  }

  li {
    list-style: none;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--bg-color);
    padding: 20px;
    width: 630px;
  }

  .title {
    font-weight: bold;
  }

  img {
    margin-right: 10px;
    position: relative;
    top: 4px;
  }

  @media screen and (min-width: 550px) {
    section {
      display: flex;
      justify-content: space-between;
    }

    select {
      width: 24vw;
      max-width: 165px;
    }

    button {
      width: 70px;
      margin-top: 30px;
    }
  }

  @media screen and (min-width: 700px) {
    section, li {
      width: 630px;
    }
  }

  @media screen and (min-width: 768px) {
    section, select, li {
      justify-content: space-between;
      flex-direction: row;
    }

    button {
      width: 100px;
      margin-top: 28px;
    }
  }

  @media screen and (min-width: 990px) {

    ul, li {
      width: 63vw;
    }

    section {
      width: 63vw;
      margin-left: 20px;
    }

    select {
      width: 16vw;
    }
  }

  @media screen and (min-width: 1100px) {
    width: 65vw;

    select {
      /* width: 18vw; */
      max-width: 290px;
    }
  }

  @media screen and (min-width: 1400px) {
    font-size: 24px;
    margin-left: 10px;

    button {
      font-size: 24px;
      width: 140px;
      margin-top: 40px;
    }

    select {
      font-size: 24px;
    }
    
    li {
      height: 70px;
      font-size: 24px;
    }
  }
`

export const TransactionSection = styled.section `
  width: 90vw;
  overflow-y: auto;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    width: 630px;
  }
`

export const Filters = styled.section `
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 610px) {
    flex-direction: row;

    button {
      margin-top: 30px;
      width: 80px;
    }

    select {
      width: 150px;
    }
  }
    @media screen and (min-width: 700px) {
      width: 630px;
    }

    @media screen and (min-width: 990px) {
      margin-top: 0px;

      select {
        width: 17vw;
      }
    }
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TransactionsDates = styled.span `
  width: 35%;
  font-weight: bold;
`

export const Type = styled.span `
  width: 20%;
  font-family: var(--body-font);
`
export const Currency = styled.span `
  width: 15%;
  font-family: var(--body-font);
`

export const Amount = styled.span `
  width: 30%;
  font-family: var(--body-font);

  img {
    width: 40px;
    margin-right: 30px;
  }
`