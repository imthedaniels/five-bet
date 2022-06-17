import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  margin: auto;
  background: var(--bg-color);
  box-sizing: border-box;
  padding-bottom: 50px;
  width: 100%;

  @media screen and (min-width: 500px) {
    padding-top: 1px;
  }

  @media screen and (min-width: 600px) {
    padding-top: 4vw;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  .imgGrande {
    figcaption {
      img {
        width: 120%;
        margin-top: 300px;
        display: none;

        @media (min-width: 800px) {
          display: flex;
          width: 55vw;
          margin-top: 0px;
        }
      }
    }
  }

  .infos {
    max-width: 90vw;
    padding: 12px;
    margin: auto;

    @media screen and (min-width: 800px) {
      padding-top: 0px;
      margin-top: 0px;
    }

    section {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 12px;
      width: 100%;
      justify-content: space-evenly;

      @media screen and (min-width: 400px) {
        flex-direction: row;
      }

      @media screen and (min-width: 800px) {
        flex-direction: column;
        width: 90%;
        position: relative;
      }

      @media screen and (min-width: 900px) {
        flex-direction: row;
        width: 100%;
      }

      .card {
        display: flex;
        background: var(--bg-color);
        width: 100%;
        text-align: center;
        border: 1px solid var(--border-color);
        border-radius: 20px;

        @media screen and (min-width: 400px) {
          width: 47%;
          height: 39vw;
          padding: 10px;
        }

        @media screen and (min-width: 800px) {
          width: 100%;
          height: 15vw;
        }

        @media screen and (min-width: 900px) {
          width: 46%;
          height: 27vw;
          max-height: 350px;
          margin-bottom: 15px;
        }

        figcaption {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 90%;

          @media (min-width: 400px) {
            justify-content: space-around;
            flex-direction: column;
            margin: auto;
            height: 100%;
          }

          @media screen and (min-width: 800px) {
            flex-direction: row;
          }

          @media screen and (min-width: 900px) {
            flex-direction: column;
          }

          img {
            width: 80px;
            padding: 10px;
            margin-right: 5px;

            @media (min-width: 400px) {
              max-width: 100%;
              width: 65%;
              display: flex;
            }

            @media screen and (min-width: 800px) {
              width: 45%;
            }

            @media screen and (min-width: 900px) {
              width: 20vw;
              max-width: 180px;
            }
          }

          h5 {
            font-family: var(--body-font);
            font-size: 15px;

            @media (min-width: 400px) {
              margin: 5px auto;
              font-size: 16px;
            }

            @media (min-width: 600px) {
              font-size: 18px;
            }

            @media (min-width: 800px) {
              font-size: 20px;
              margin-bottom: 20px;
            }

            @media (min-width: 1300px) {
              font-size: 22px;
            }

            @media (min-width: 1700px) {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
`
