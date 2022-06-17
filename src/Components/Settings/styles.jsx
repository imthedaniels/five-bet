import styled from 'styled-components'

export const Container =  styled.div `
  width: 90vw;
  margin-bottom: 30px;

  @media screen and (min-width: 700px) {
    width: 630px;

    section {
      display: flex;
      justify-content: space-between;
    }
  } 

  @media screen and (min-width: 990px) {
    width: 62vw;
    margin-left: 30px;
  }

  @media screen and (min-width: 1200px) {
    section {
      display: flex;
      justify-content: space-between;
    }
  } 
`

export const TagSettings =styled.div`
  font-family: var(--body-font);
  background-color: var(--body-color);
  font-size: 18px;
  padding: 0;
  margin: 0;
  font-weight: 400;
  padding: 20px;
  background: var(--hover-alt-color);
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  height: 100px;


    h5{
      font-size: 24px;
      font-family: var(--body-font);
      color: var(--bs-white);
      font-weight: 600;
      margin: 0px;
    }
    
`

export const TagProfile =styled.div`
    font-family: var(--body-font);
    background-color: var(--body-color);
    font-size: 18px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    font-weight: 400;
    padding: 15px;
    background: var(--hover-alt-color);
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap:25px;
    height: 350px;

    .avatar{
        display: inline;
        border: 1px solid var(--hover-color);
        padding: 10px;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    }
    .text{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        font-family: var(--body-font);
        color:var(--bs-white);
        height: 200px;

        input{
          display: none;
        }

        .button {
          width: 250px;
        }

        h4{
            font-weight: 700;
            margin-bottom: 14px;
            color: var(--bs-white);
            margin: 0;
            font-family: var(--body-font);
            font-size: 18px;
            line-height: 30px;
        }

        button{
            top: 0;
            width: 100%;
            height: 55px;
            border-radius: 20px;
            border: 1px solid var(--bs-white);
            color:var(--bs-white);
            display: flex;
            align-items: center;
            font-size: 18px;
        }
        
    }
    
`

export const TagEmail =styled.div`
    font-family: var(--body-font);
    background-color: var(--body-color);
    font-size: 18px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    font-weight: 400;
    overflow-x: hidden;
    padding: 15px;
    background: var(--hover-alt-color);
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:var(--bs-white);

    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;    
        text-align: center;    
        height: 80px;
    }

    .unverified{
      color:var(--head-alt-color)
    }

    @media screen and (min-width: 700px) {
      width: 49%;
    }

    @media screen and (min-width: 1200px) {
      width: 49%;
    }
`

export const TagPassowrd =styled.div`
    font-family: var(--body-font);
    background-color: var(--body-color);
    font-size: 18px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    font-weight: 400;
    padding: 15px;
    background: var(--hover-alt-color);
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:var(--bs-white);
    height: 150px;
    justify-content: space-around;

    Modal{

    }

    button{
        border-radius: 10px;
        padding: 10px 30px;
        font-weight: 600;
        text-align: center;
        background: var(--hover-color);
        color: var(--bs-white);
        transition: 0.3s;
        border-radius: 25px;
        border: 1px solid var(--hover-color);
        font-size: 18px;
        line-height: 30px;
        box-sizing: border-box;
    }

    @media screen and (min-width: 700px) {
      width: 49%;
    }

    @media screen and (min-width: 1200px) {
      width: 49%;
    }
`

export const TagEnable =styled.div`
    font-family: var(--body-font);
    background-color: var(--body-color);
    font-size: 18px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    font-weight: 400;
    overflow-x: hidden;
    padding: 15px;
    background: var(--hover-alt-color) ;
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    color:var(--bs-white);
`

export const Authentication =styled.div`
    background-color:  var(--hover-alt-color);
    border-radius: 8px;
    border: 1px solid var(--bs-white);
    color:var(--bs-white);

    h4{
        margin-left: 15px;
        font-size: 25px;
        color:var(--bs-white)
    }

    div {
      width: 95%;
      overflow-y: scroll;
    }
`
export const Buttons =styled.div`
    display: flex;
    background-color:  var(--hover-alt-color);
    color:var(--bs-white);
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 10px;
    height: 70px;
    overflow-y: scroll;
    a{
      text-decoration: none;
    }

    button{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      border-radius: 10px;
      padding: 10px;
      font-weight: 600;
      text-align: center;
      background: var(--hover-color);
      color: var(--bs-white);
      transition: 0.3s;
      border-radius: 25px;
      border: 1px solid var(--hover-color);
      font-size: 18px;
      line-height: 30px;
      box-sizing: border-box;
      margin-right: 10px;
      height: 50px;
    }

    /* @media screen and (min-width: 990px) {
      height: 220px;
    } */
`

export const Footer =styled.div`
  margin: auto;
    p{
        width: 90%;
        font-size: 18px;
        color: var(--bs-white);
        margin: 20px auto;
    }

    footer{
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
        color: var(--bs-white);
        margin: auto;
        margin-bottom: 5px;

        button{
          margin: auto;
          width: 186px;
          margin-top: 20px;
          display: flex; 
          justify-content: space-around;
          flex-wrap: wrap;
          border-radius: 10px;
          padding: 10px 10px;
          font-weight: 600;
          text-align: center;
          background: var(--hover-color);
          color: var(--bs-white);
          transition: 0.3s;
          border-radius: 25px;
          border: 1px solid var(--hover-color);
          font-size: 18px;
          line-height: 30px;
          box-sizing: border-box;
          margin-bottom: 20px;
        } 
    }
`