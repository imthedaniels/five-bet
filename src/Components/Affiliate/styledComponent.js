import styled from 'styled-components'

export const DivAffiliate = styled.div`
  width: 90vw;
  height: auto;
  background-color: #15115f;
  border-radius: 10px;
  border: 1px solid #474a9e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  color: var(--bs-white);

  section {
    justify-content: space-evenly;
    margin-bottom: 20px;
    width: 80vw;
    overflow-y: auto;
    margin: auto;
    margin-bottom: 20px;
  }

  ul {
    padding: 0px;
    background-color: #382590;
    text-align: center;
    width: 655px;
    overflow-y: auto;
    margin: auto;
  }

  .title {
    font-weight: bold;
    color: var(--bs-light);
  }

  li {
    list-style: none;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--bg-color);
    padding: 20px;
    width: 655px;
  }

  /* @media screen and (min-width: 990px) {
    margin-left: 20px;

    ul, li, section {
      width: 63vw;
    }

  } */

  @media screen and (min-width: 700px) {
    width: 630px;

    section {
      width: 580px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 62vw;
    margin-left: 0px;

    section, ul, li {
      width: 57vw;
    }
  }
`

export const Divtitle = styled.div`
  color: white;
  text-align: left;
  margin-left: 15px;
  width: 90%;
`

export const H5title = styled.h5`
  font-size: 18px;
  margin-bottom: 0;
`

export const Ptitle = styled.p`
  font-size: 15px;
`

export const Divreferral = styled.div`
  width: 92.5%;
  height: 123px;
  border: 1px solid #474a9e;
  border-radius: 8px;
  background-color: #322a71;
  color: white;
  padding: 20px 25px;
  margin: auto;
`

export const Preferral = styled.p`
  margin: 0;
`

export const DIVcopyreferral = styled.div`
  height: 62px;
  border-radius: 8px;
  border: 1px solid #b7a7ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const Inputreferral = styled.input`
  height: 50px;
  width: 70%;
  background: none;
  border: 0;
  color: white;
`

export const IMGreferral = styled.img`
  cursor: pointer;
`

export const DIVreferralINFO = styled.div`
  width: 100%;
  height: 140px;
  background-color: #322a71;
  border-radius: 8px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 700px) {
    width: 49%;
  }
`

export const DivInfos = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const DIVphrasesReferral = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 45px;
`

export const PnumberReferral = styled.p`
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  @media (min-width: 767px) {
    font-size: 28px;
    margin-bottom: 5px;
  }
`

export const PphraseReferral = styled.p`
  color: #00ff6d;
  margin: 0;
  font-size: 16px;
`

export const IMGreferralEarned = styled.img`
  margin-left: 20px;
  height: 80px;
  margin-top: 30px;
  margin-right: 15px;
`

export const DivInfoCalendario = styled.div`
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;
`

export const InputReferralCalendario = styled.input`
  background: none;
  height: 50px;
  border: 1px solid #3d2a98;
  border-radius: 30px;
  background-color: #291b6b;
  padding: 10px;
  margin-left: 10vw;
  color: white;
`

export const PReferralCalendario = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: fit-content;
  margin-left: 10px;
  color: white;
  font-family: var(--body-font);
`

export const Date = styled.span `
  width: 25%;
  font-weight: bold;
`

export const Type = styled.span `
  width: 25%;

`
export const Currency = styled.span `
  width: 15%;
`

export const Amount = styled.span `
  width: 45%;
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`