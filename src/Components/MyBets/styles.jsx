import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--head-bs);
  border-radius: 10px;
  width: 90vw;
  color: var(--bs-white);
  font-family: var(--body-font);
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
  }

  .description {
    color: var(--head-color);
  }

  .time {
    background-color: var(--head-color);
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

  @media screen and (min-width: 740px) {
    width: 665px;
    margin-left: 30px;
  }

  @media screen and (min-width: 900px) {
    width: 62vw;
  }

@media screen and (min-width: 1400px) {
    margin-top: 120px;
    margin-bottom: -50;
    width: 900px;
  }

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
    min-width: 150px;
  }

  @media screen and (min-width: 990px) {
    margin-left: 30px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1400px) {
    width: 900px;
  }

  @media screen and (min-width: 1600px) {
    width: 900px;
    margin-right: 10vw;
    position: relative;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 400px) {
    flex-direction: row;

    img {
      width: 80px;
    }

    .time {
      width: 110px;
      font-size: 16px;
      padding: 20px 0px;
      margin: auto;
    }

    .teams {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 740px) {
    img {
      width: 100px;
    }

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

  @media screen and (min-width: 1400px) 

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

  @media screen and (min-width: 1400px) {
    width: 900px;
  }
`

export const Card = styled.div`
  text-align: center;
  margin-bottom: 30px;
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
export const Card2 = styled.div `
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (min-width: 500px) {
      padding-top: 30px;
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

  @media screen and (min-width: 1400px) {
    width: 900px;
  }
`

export const SectionBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #382590;
  height: 200px;
  border-radius: 0px 0px 10px 10px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    height: 100px;
  }

  @media screen and (min-width: 1400px) {
    width: 900px;
  }
`
