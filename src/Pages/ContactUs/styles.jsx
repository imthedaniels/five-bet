import styled from "styled-components";

export const FAQ = styled.div`
  margin-top: -1px;
  background-color: var(--bg-color);
  padding-top: 50px;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  h4 {
    padding: 0;
    margin: 0;
    color: var(--head-color);
    margin-bottom: 25px;
    font-size: 24px;
    line-height: 31.2px;
    margin-top: -6px;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    padding: 0;
    margin: 0;
    max-width: 50%;
    font-family: var(--body-font);
    color: var(--bs-white);
    font-weight: 600;
    text-align: center;
    font-size: 50px;
    margin-bottom: 25px;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  h6 {
    padding: 0;
    margin: 0;
    color: var(--bs-white);
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 31.2px;
    margin-top: -6px;
    font-weight: 600;
    text-align: center;
  }

  .buttons {
    border: 1px solid var(--bs-white);
    display: flex;
    margin-bottom: 10px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    width: 40%;
    max-width: 550px;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    @media (max-width: 1180px) {
      width: 60%;
    }

    @media (max-width: 790px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    border-radius: 30px;
    padding: 10px 16px 10px 16px;
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
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  margin-top: -1px;
  padding-top: 35px;
  padding-bottom: 35px;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  .summary1 {
    align-items: center;
    gap: 8px;
    width: 50%;
    background: var(--hover-color);
    margin-bottom: 15px;
    border-radius: 15px;
    @media (max-width: 1180px) {
      width: 40%;
      .icone {
        display: none;
      }
    }
  }
  .summary2 {
    align-items: center;
    border-radius: 15px;
    color: var(--bs-white);
    font-size: 26px;
    margin-top: 4px;
    gap: 8px;
    font-family: var(--body-font);
    display: flex;
    align-items: center;
    @media (max-width: 700px) {
      font-size: 16px;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
  .icone {
    align-self: center;
    margin-right: 15px;
  }
  .typography {
    font-size: 18px;
    font-family: var(--body-font);
    @media (max-width: 700px) {
      font-size: 12px;
    }
  }
`;
