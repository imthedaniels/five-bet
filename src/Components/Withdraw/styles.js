import styled from 'styled-components'

export const BtnWith = styled.button`
  padding: 10px 15px;
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

export const ContainerWithdraw = styled.div`
  flex: 0 0 auto;
  width: 90vw;
  background: #15115f;
  border: 1px solid #3f4290;
  padding: 20px;
  border-radius: 20px;
  font-family: var(--body-font);
  color: var(--bs-white);
  font-weight: bold;
  margin-bottom: 40px;

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
  /* 
  @media screen and (min-width: 1150px) {
    width: 315px;
    margin: 0px;
    margin-bottom: 20px;
  } */
`

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 700px) {
    justify-content: flex-end;
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

  @media screen and (min-width: 590px) {
    width: 520px;
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
