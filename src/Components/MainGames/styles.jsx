import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--head-bs);
  border-radius: 10px;
  color: var(--bs-light);
  font-family: var(--body-font);
  font-weight: bold;
  margin-bottom: 20px;

  button {
    background-color: var(--hover-color);
    border: 2px solid var(--hover-color);
    border-radius: 50px;
    padding: 10px 15px;
    height: 50px;
    color: var(--bs-light);
    font-size: 18px;
    font-family: var(--body-font);
    font-weight: bold;
  }

  p {
    text-align: center;
  }

  .description {
    color: var(--head-color);
  }

  .time {
    background-color: var(--matches-color);
    border-radius: 5px;
    height: 60px;
    width: 150px;
    padding: 10px;
    font-size: 26px;
  }

  .teams {
    font-size: 28px;
  }

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (min-width: 500px) {
    .time {
      width: 110px;
      font-size: 22px;
      padding: 15px 0px;
      margin: auto;
    }

    .teams {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 730px) {
    width: 658px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1350px) {
    width: 44.5vw;
    justify-content: center;
    align-items: center;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 500px) {
    flex-direction: row;

    img {
      width: 80px;
    }
  }

  @media screen and (min-width: 740px) {
    img {
      width: 100px;
    }

    .time {
      width: 150px;
      font-size: 22px;
      margin: auto;
    }

    .teams {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1500px) {
    height: 350px;

    img {
      width: 140px;
    }

    .time {
      width: 180px;
      font-size: 28px;
      padding: 10px 0px;
      margin: auto;
    }

    .teams {
      font-size: 24px;
    }

    .description {
      font-size: 20px;
    }

    h2 {
      font-size: 28px;
    }
  }
`

export const Card = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  h2 {
    font-family: var(--body-font), Courier, monospace;
  }

  @media screen and (min-width: 500px) {
    width: 30%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
export const Card2 = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (min-width: 500px) {
    padding-top: 30px;
  }
`

export const SectionButtons = styled.div`
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #cab4ff;
  padding: 15px;
  border-radius: 50px;
  width: 190px;
  height: 230px;

  @media screen and (min-width: 603px) {
    height: 80px;
    width: 520px;

    button {
      margin: 0px;
    }
  }

  @media screen and (min-width: 990px) {
    margin-left: 0px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
    height: fit-content;
  }
`

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  background-color: #382590;
  border-radius: 10px 10px 0px 0px;
  padding: 20px;

  span {
    margin-left: 20px;
    font-weight: 400;
  }

  @media screen and (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 100px;
  }
`

export const SectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #382590;
  height: 100px;
  border-radius: 0px 0px 10px 10px;
  margin-top: 10px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    height: 100px;
  }
`
