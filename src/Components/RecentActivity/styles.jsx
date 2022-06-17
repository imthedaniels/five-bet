import styled from 'styled-components'

export const Container = styled.div `
  color: var(--bs-white);

  .header {
    justify-content: center;
  }

  section {
    justify-content: space-evenly;
    margin-bottom: 20px;
    width: 90vw;
    overflow-y: auto;
    margin: auto;
    margin-bottom: 20px;
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

    @media screen and (min-width: 700px) {
      width: 630px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 22px;
      height: 70px;
    }
  }

  .title {
    font-weight: bold;
  }

  img {
    margin-right: 10px;
    position: relative;
    top: 4px;
  }

  @media screen and (min-width: 990px) {
    margin-left: 20px;

    ul, li, section {
      width: 63vw;
    }

  }
`

export const SectionRates = styled.div `
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 700px) {
    width: 630px;
    justify-content: space-between;
    margin: auto auto 20px auto;
  }

  @media screen and (min-width: 990px) {
    width: 63vw;
  }
`

export const Card = styled.div `
  display: flex;
  justify-content: space-evenly;
  background-color: #382590;
  padding: 20px;
  border-radius: 10px;
  color: #FFFFFF;
  width: 90vw;
  margin-top: 15px;

  img {
    width: 80px;
  }

  @media screen and (min-width: 334px) {
    padding-left: 50px;
    justify-content: start;
  }

  @media screen and (min-width: 700px) {
    padding-left: 20px;
    width: 200px;
    
    span {
      font-size: 14px;
    }

    img {
      width: 60px;
      height: 60px;
    }
  }
  
  @media screen and (min-width: 990px) {
    width: 20.5vw;
    margin-top: 0px;
  }

  @media screen and (min-width: 1200px) {
    width: 20vw;
  }

  @media screen and (min-width: 1400px) {
    padding: 35px;
  }
`

export const Statistic = styled.div `
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 27px;

  span {
    color: #00ff6d;
    font-size: 16px;
  }

  @media screen and (min-width: 700px) {
    span {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1400px) {
    font-size: 30px;
    width: 150px;

    span {
      font-size: 22px;
      width: 150px;
    }
  }
`
export const Date = styled.span `
  width: 30%;
  font-weight: bold;
`

export const Type = styled.span `
  width: 25%;

`
export const Currency = styled.span `
  width: 15%;
`

export const Amount = styled.span `
  width: 30%;
`

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`