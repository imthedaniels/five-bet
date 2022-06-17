import styled from 'styled-components'
import indexBG from '../../Assets/index-bg.png'
import bannerBG from '../../Assets/banner-bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f2340;
  min-height: 900px;
  max-height: 1000px;
  width: 100%;
  align-items: center;
  position: relative;

  @media screen and (min-width: 411px) {
    padding-top: 6vw;
    min-height: 880px;
    max-height: 1000px;
  }

  @media screen and (min-width: 441px) {
    padding-top: 12vw;
    min-height: 850px;
    max-height: 1000px;
  }

  @media screen and (min-width: 500px) {
    padding-top: 10vw;
    min-height: 700px;
    max-height: 1000px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 8vw;
    min-height: 770px;
    max-height: 1000px;
  }

  @media screen and (min-width: 1001px) {
    padding-top: 6vw;
    min-height: 800px;
    max-height: 1200px;
  }

  @media screen and (min-width: 1300px) {
    padding-top: 6vw;
    min-height: 950px;
    max-height: 1200px;
  }

  .coin1,
  .coin2,
  .coin3-1,
  .coin3-2,
  .coin4,
  .trophy {
    display: none;
  }

  @media screen and (min-width: 1920px) {
    display: flex;
    background-color: #1f2340;
    background-repeat: no-repeat;
    background-position: top 160px right 120px, top 100px right 0;
    background-size: auto;
    padding-bottom: 100px;
    height: 100%;
    width: 100%;
    background-image: url(${indexBG}), url(${bannerBG});

    .coin1,
    .coin2,
    .coin3-1,
    .coin3-2,
    .coin4,
    .trophy {
      display: block;
    }

    .coin1 {
      left: 27%;
      top: 40%;
      animation: spin 30s linear infinite;
      position: absolute;
    }

    .coin2 {
      left: 5%;
      top: 35%;
      animation: ripple2Ani 4s linear infinite;
      position: absolute;
    }

    .coin3-1 {
      left: 18%;
      bottom: calc(3%);
      animation: rippleAni 5s linear infinite;
      position: absolute;
    }

    .coin3-2 {
      left: 36%;
      bottom: calc(20%);
      animation: rippleAni 5s linear infinite;
      position: absolute;
    }

    .coin4 {
      left: 25%;
      bottom: calc(1%);
      animation: spin 30s linear infinite;
      position: absolute;
    }

    .trophy {
      left: 3%;
      bottom: calc(1%);
      animation: rippleAni 3s linear infinite;
      position: absolute;
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1919px) {
    display: flex;
    background-color: #1f2340;
    background-repeat: no-repeat;
    background-position: top 200px right 130px, top 100px right 0;
    background-size: 700px, 1100px;
    width: 100%;
    background-image: url(${indexBG}), url(${bannerBG});

    .coin1,
    .coin2,
    .coin3-1,
    .coin3-2,
    .coin4,
    .trophy {
      display: block;
    }

    .coin1 {
      left: 27%;
      top: 350px;
      animation: spin 30s linear infinite;
      position: absolute;
    }

    .coin2 {
      left: 5%;
      top: 300px;
      animation: ripple2Ani 4s linear infinite;
      position: absolute;
    }

    .coin3-1 {
      left: 20%;
      top: 780px;
      animation: rippleAni 5s linear infinite;
      position: absolute;
    }

    .coin3-2 {
      left: 40%;
      top: 650px;
      animation: rippleAni 5s linear infinite;
      position: absolute;
    }

    .coin4 {
      left: 27.5%;
      top: 650px;
      animation: spin 30s linear infinite;
      position: absolute;
    }

    .trophy {
      left: 3%;
      bottom: calc(20%);
      animation: rippleAni 3s linear infinite;
      position: absolute;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    display: flex;
    background-color: #1f2340;
    background-repeat: no-repeat;
    background-position: top 200px right 55px, top 100px right 0;
    background-size: 600px, 700px;
    width: 100%;
    background-image: url(${indexBG}), url(${bannerBG});
  }

  @media screen and (min-width: 880px) and (max-width: 1000px) {
    display: flex;
    background-color: #1f2340;
    background-repeat: no-repeat;
    background-position: top 220px right 55px, top 100px right 0;
    background-size: 45vw, 700px;
    width: 100%;
    background-image: url(${indexBG}), url(${bannerBG});
  }

  @media screen and (min-width: 565px) and (max-width: 880px) {
    position: none;
    display: flex;
    background-color: #1f2340;
    background-repeat: no-repeat;
    background-position: top 100px left 35vw;
    background-size: 500px, 600px;
    width: 100%;
    background-image: url(${bannerBG});

    .coin2,
    .trophy {
      display: block;
    }

    .coin2 {
      left: 8%;
      top: 165px;
      animation: ripple2Ani 4s linear infinite;
      position: absolute;
    }

    .trophy {
      left: 45%;
      bottom: calc(40%);
      animation: rippleAni 3s linear infinite;
      position: absolute;
    }
  }
`

//________________________________________________________________
//________________________________________________________________
//________________________________________________________________

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 20px;
  width: 96%;

  @media screen and (min-width: 414px) {
    width: 90%;
  }

  @media screen and (min-width: 1920px) {
    margin-top: 100px;
    width: 700px;
    margin-left: 100px;
    align-self: flex-start;
  }

  @media screen and (min-width: 1300px) and (max-width: 1919px) {
    margin-top: 120px;
    width: 40%;
    margin-left: 50px;
    align-self: flex-start;
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 38%;
    margin-top: 100px;
    margin-left: 50px;
    align-self: flex-start;
  }

  @media screen and (min-width: 880px) and (max-width: 1000px) {
    width: 480px;
    margin-left: 30px;
    align-self: flex-start;
  }

  @media screen and (min-width: 768px) and (max-width: 880px) {
    width: 650px;
    margin-left: 30px;
    align-self: flex-start;
  }

  h2 {
    font-family: var(--body-font);
    color: var(--head-color);
    margin-bottom: 25px;
    font-size: 26px;
    line-height: 41.6px;
    margin-top: -8px;

    @media screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 32px;
      line-height: 41.6px;
    }
  }

  h1 {
    font-family: var(--body-font);
    color: var(--bs-white);
    font-weight: 600;
    text-transform: initial;
    transition: all 0.3s;
    font-size: 46px;
    line-height: 48.8px;
    margin-top: -20px;
    font-weight: 700;
    margin-bottom: 14px;

    @media screen and (min-width: 1300px) {
      font-size: 76px;
      line-height: 98.8px;
      margin-top: -20px;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
      font-size: 56px;
      line-height: 68.8px;
    }
  }

  h3 {
    font-family: var(--body-font);
    font-size: 20px;
    line-height: 36px;
    margin-top: -7px;
    color: #b4ccf9;
    min-height: 105px;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 24px;
      line-height: 36px;
    }

    @media screen and (min-width: 1023px) {
      font-size: 25px;
      line-height: 36px;
    }
  }

  button {
    padding: 10px 30px;
    font-weight: 600;
    text-align: center;
    background: var(--darkreader-bg--hover-color);
    color: var(--bs-white);
    border-radius: 25px;
    border: 1px solid var(--hover-color);
    width: 180px;
    height: 45px;
    font-size: 15px;

    &:hover {
      background-color: var(--hover-alt-color);
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--darkreader-border--hover-color);
    border-radius: 30px;
    padding: 6px;
    width: 180px;
    height: 60px;

    @media screen and (min-width: 768px) {
      width: 200px;
      height: 75px;

      button {
        width: 200px;
        height: 65px;
        font-size: 18px;
      }
    }
  }
`
