import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  background-color: #322a71;
  box-shadow: 4px 6.928px 79px 0px rgb(0 0 0 / 18%);
  padding: 30px;
  color: var(--bs-white);
  font-size: 18px;
  max-width: 500px;

  @media (max-width: 500px) {
    max-width: 100%;
  }

  form {
    .referral {
      margin-top: 20px;

      input {
        margin: 0px;
      }

      span {
        color: var(--bs-white);
        text-decoration: none;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: var(--head-alt-color);
        }
      }

      .error {
        color: red;
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
`;

export const SelectContainer = styled.select`
  background-color: #282470;
  padding: 10px 20px;
  color: var(--bs-white);
  width: 100%;
  font-family: var(--body-font);
  height: 50px;
  background: #432f9f;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 18px;
  }
  :-ms-input-placeholder {
    font-size: 18px;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid var(--border-color);
    outline: 0;
  }

  option {
    border: none;
    color: var(--bs-white);
    font-size: 18px;
    border-color: rgb(47, 42, 157);
    background-image: initial;
    background-color: rgb(47, 42, 157);
  }
`;

export const BtnRegister = styled.button`
  padding: 10px 30px;
  font-weight: 600;
  text-align: center;
  background: var(--darkreader-bg--hover-color);
  color: var(--bs-white);
  transition: 0.3s;
  border-radius: 25px;
  border: 1px solid var(--hover-color);
  width: 100%;
  height: 45px;
  font-size: 18px;
  font-family: var(--body-font);
  &:hover {
    background-color: var(--hover-alt-color);
  }
`;

export const ContainerBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--darkreader-border--hover-color);
  border-radius: 30px;
  padding: 6px;
  width: 100%;
  height: 60px;
  margin-top: 30px;
`;

export const ContainerHaveLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  label {
    cursor: pointer;
    color: var(--head-alt-color);
    text-decoration: underline;
  }

  @media (max-width: 367px) {
    text-align: center;
  }
`;

export const ContainerLogoMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #424a92;

  span {
    font-weight: 700;
    font-family: var(--body-font);
    margin-bottom: 10px;
  }

  a {
    color: var(--bs-white);
    text-decoration: none;
    transition: 0.5s;
    margin: 0 10px;
    &:hover {
      color: var(--head-alt-color);
    }
    svg {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const ContainerBetsAndTotal = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #424a92;
  padding-top: 30px;
  margin-top: 20px;
  flex-wrap: wrap;

  figure {
    display: flex;
    justify-content: center;
    margin: 0 10px;
  }

  @media (max-width: 367px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Bets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #3fe887;
  }
`;

export const BtnClosed = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  button {
    padding: 5px 8px;
    margin: 0;
    background-color: #ffb4bc;
    border: none;
    border-radius: 0.25rem;
    font-weight: 700;

    &:hover {
      background-color: var(--head-alt-color);
    }
  }
`;
