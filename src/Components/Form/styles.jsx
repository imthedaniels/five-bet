import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-color);
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-self: center;
  box-sizing: border-box;

  h1 {
    text-align: center;
    font-family: var(--body-font);
    color: var(--bs-white);
  }
  h5 {
    text-align: center;
    font-family: var(--body-font);
    color: var(--bs-white);
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-left: calc(var(--bs-gutter-x) * -0.5);
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    font-family: var(--body-font);
    flex: 0 0 auto;
    width: 100%;
    gap: 15px;
    justify-content: center;
    @media (max-width: 1200px) {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
    }

    @media (max-width: 468px) {
      width: 160%;
    }

    label {
      flex: 0 0 auto;
      width: 60%;
      display: flex;
      flex-direction: column;
      font-size: 18px;
      color: var(--bs-white);

      input {
        ::placeholder,
        ::-webkit-input-placeholder {
          font-size: 18px;
          color: #5c528a;
        }
        :-ms-input-placeholder {
          font-size: 18px;
        }
        &:focus {
          box-shadow: 0 0 0 0;
          border: 1px solid var(--border-color);
          outline: 0;
        }
      }
      @media (max-width: 1200px) {
        width: 90%;
      }

      @media (max-width: 700px) {
        width: 90%;
      }
    }

    textarea {
      border-style: solid;
      border-width: 1px;
      border-color: var(--bs-blue-dark);
      border-radius: 10px;
      background-color: var(--db-purple);
      min-height: 150px;
      resize: none;
      padding: 10px 20px;
      color: var(--bs-white);
      width: 100%;
      font-family: var(--body-font);
      background: var(--hover-alt-color);
      border: 1px solid var(--border-color);
      &:focus {
        box-shadow: 0 0 0 0;
        border: 1px solid var(--border-color);
        outline: 0;
      }

      ::placeholder,
      ::-webkit-input-placeholder {
        font-size: 18px;
        color: #5c528a;
      }
    }

    input {
      border-radius: 10px;
      background-color: var(--hover-alt-color);
      flex: 0 0 auto;
      height: 45px;
      padding: 5px 20px;
      border: 1px solid var(--border-color);
      color: var(--bs-white);
      width: 100%;
      font-family: var(--body-font);
      ::placeholder {
        color: var(--bs-gray);
      }
    }

    Button {
      cursor: pointer;
      padding: 10px 30px;
      font-weight: 400;
      border-radius: 30px;
      padding: 6px 15px;
      text-align: center;
      font-size: 18px;
      line-height: 30px;
      background: var(--hover-color);
      color: var(--bs-white);
      transition: 0.3s;
      border-radius: 25px;
      border: 1px solid var(--hover-color);
      box-sizing: border-box;
      font-family: var(--body-font);
      margin-top: 40px;
      border: 1px solid var(--hover-color);
    }

    .botao {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  border-radius: 8px;
  background-color: var(--form-back);
  box-sizing: border-box;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 10px;
  }
`;
