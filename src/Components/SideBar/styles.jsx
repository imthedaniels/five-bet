import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  border-radius: 8px;
  flex: 0 0 auto;

  .button {
    padding: 10px 30px;
    font-weight: 600;
    text-align: center;
    background: var(--hover-color);
    color: var(--bs-white);
    border-radius: 25px;
    border: 1px solid var(--hover-color);
    font-size: var(--body-font);
    margin-top: 15px;
    width: 170px;
    height: 50px;
  }

  .card {
    background: #382590;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 90vw;
    height: 250px;
    color: var(--bs-white);

    font: var(--body-font);

    span {
      text-align: center;
    }

    p {
      font-size: 18px;
      padding: 0;
    }

    @media screen and (min-width: 1400px) {
      p,
      span {
        font-size: 24px;
      }
    }
  }

  .cardMeio {
    background: #382590;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 90vw;
    height: 300px;
    margin-top: 30px;
    color: var(--bs-white);
    font: var(--body-font);
    p {
      font-size: 18px;
    }
  }

  .cardFim {
    background: #382590;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 90vw;
    height: 350px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: var(--bs-white);
    font: var(--body-font);
    span {
      text-align: center;
      width: 80%;
    }

    p {
      font-size: 18px;
      padding: 0;
    }
  }

  .subBotton {
    background-color: var(--hover-color);
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-radius: 0px 0px 8px 8px;
    width: 90vw;
    margin-top: 30px;

    button {
      background-color: transparent;
      border: none;
      height: 25px;
      font-size: 18px;
      font-weight: 400;
      color: var(--bs-white);
      font: var(--body-font);
    }
  }

  @media screen and (min-width: 334px) {
    align-items: center;

    .card,
    .cardMeio,
    .cardFim,
    .subBotton {
      width: 300px;
    }

    @media screen and (min-width: 700px) {
      width: 630px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .card,
      .cardMeio,
      .cardFim {
        margin-top: 0px;
        width: 200px;
        height: 300px;
        justify-content: center;
      }

      .card {
        justify-content: flex-start;
        padding-top: 20px;
      }

      h3 {
        margin-bottom: 42px;
      }

      .help {
        display: none;
      }
    }

    @media screen and (min-width: 990px) {
      margin-left: 0vw;
      flex-direction: column;
      width: 220px;

      .card,
      .cardMeio,
      .cardFim {
        width: 220px;
        margin-bottom: 15px;
        justify-content: center;
        padding-top: 0px;
      }

      .cardMeio {
        height: 280px;
      }

      .cardFim {
        height: 350px;
      }

      .help {
        display: flex;
      }
    }

    @media screen and (min-width: 1200px) {
      .card,
      .cardMeio,
      .cardFim {
        width: 270px;
      }
    }

    @media screen and (min-width: 1400px) {
      margin-left: 0vw;

      .card,
      .cardMeio,
      .cardFim {
        width: 300px;
        font-size: 24px;
      }

      .card,
      .cardMeio {
        height: 320px;
      }

      .cardFim {
        height: 500px;
      }

      .subBotton {
        height: 50px;
      }

      .button {
        padding: 20px;
        width: fit-content;
      }
    }

    @media screen and (min-width: 1700px) {
      .card,
      .cardMeio,
      .cardFim {
        width: 350px;
      }
    }
  }
`
