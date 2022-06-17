import styled from 'styled-components'

export const FormInputs = styled.form`
  border-style: solid;
  border-width: 1px;
  border-color: #474a9e;
  border-radius: 10px;
  background-color: #322a71;
  padding: 30px;
  margin-top: 20px;
  height: 260px;
`

export const LinksForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  a {
    color: #e2e1ff;
    text-decoration: none;
  }

  a + a {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`

export const ContainerDeposit = styled.div`
  flex: 0 0 auto;
  width: 90vw;
  background: #15115f;
  border: 1px solid #3f4290;
  padding: 20px;
  border-radius: 20px;
  font-family: var(--body-font);
  color: var(--bs-white);
  font-weight: bold;
  margin-bottom: 20px;

  p {
    color: rgb(183, 208, 255);
    font-size: 18px;
  }

  @media screen and (min-width: 700px) {
    width: 305px;
    margin: 0px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 990px) {
    width: 31vw;
  }

  @media screen and (min-width: 1200px) {
    width: 30.5vw;
  }
`

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  color: var(--bs-white);

  @media screen and (min-width: 700px) {
    width: 315px;
  }

  @media screen and (min-width: 990px) {
    width: 32vw;
  }

  @media screen and (min-width: 1200px) {
    width: 31vw;
  }
`

export const SelectCurrent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  select {
    font-family: var(--body-font);
    padding: 5px 10px;
    border-color: rgb(47, 42, 157);
    background-image: initial;
    background-color: transparent;
    border-radius: 5px;
    color: var(--border-color);
    font-weight: bold;
    margin-left: 15vw;
    width: 23vw;

    option {
      border: none;
      border-color: rgb(47, 42, 157);
      background-image: initial;
      background-color: rgb(47, 42, 157);
    }
  }

  @media screen and (min-width: 590px) {
    select {
      margin-left: 90px;
      width: 135px;
    }
  }
`

export const ContainerCurrentBalance = styled.div`
  background: #15115f;
  border: 1px solid #3f4291;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  font-family: var(--body-font);
  color: var(--border-color);
  font-weight: bold;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 630px;
    margin: 0px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 990px) {
    width: 64vw;
  }

  @media screen and (min-width: 1200px) {
    width: 63vw;
  }
`

export const SpanValues = styled.span`
  background: #463b9f;
  border-radius: 5px;
  display: inline-block;
  padding: 10px 25px;
  margin: 20px 0 25px;
  font-weight: 700;
  width: 200px;

  label {
    font-weight: 400;
    color: rgb(255, 224, 133);
  }
`

export const SelectContainer = styled.select`
  background-color: #282470;
  padding: 10px 20px;
  color: var(--border-color);
  width: 100%;
  font-family: var(--body-font);
  height: 50px;
  background: #432f9f;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 20px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
  :-ms-input-placeholder {
    font-size: 18px;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid var(--border-color);
    outline: 0;
  }

  option {
    border: none;
    color: var(--bs-white);
    font-size: 18px;
    border-color: rgb(47, 42, 157);
    background-image: initial;
    background-color: rgb(47, 42, 157);
  }
`

export const ContainerAmount = styled.div`
  display: flex;
  width: 180px;
  align-items: center;
  background-color: #282470;
  padding: 0px 20px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
  :-ms-input-placeholder {
    font-size: 18px;
  }

  margin-bottom: 20px;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0px;
    padding: 0px;
    padding-top: 8px;

    font-size: 16px;
    &:focus {
      box-shadow: 0 0 0 0;
      border: none;
      outline: 0;
    }
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`

export const BtnWith = styled.button`
  padding: 10px 0px;
  font-weight: 600;
  text-align: center;
  background: var(--darkreader-bg--hover-color);
  color: var(--bs-white);
  transition: 0.3s;
  border-radius: 25px;
  border: 1px solid var(--hover-color);
  width: 180px;
  height: 45px;
  font-family: var(--body-font);

  &:hover {
    background-color: var(--hover-alt-color);
  }
`

export const ContainerBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--darkreader-border--hover-color);
  border-radius: 30px;
  padding: 6px;
  width: 180px;
  height: 60px;
  margin: 0 auto;
`
