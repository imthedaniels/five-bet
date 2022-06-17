import styled, {css} from "styled-components";

export const Container = styled.div`
  span {
    color: white;
  }

  .error{
    color: red;
    font-size:14px;
    margin-bottom:5px;

    span{
      color: red;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-family: var(--body-font);
  input {
    background-color: #282470;
    font-family: var(--body-font);
    padding: 10px 20px;
    color: var(--bs-white);
    margin-bottom:20px;
    width: 100%;
    font-family: var(--body-font);
    height: 50px;
    
    background: #432f9f;
    border: 1px solid var(--border-color);
    border-radius: 10px;
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

    ${props => props.isErrored && css`
    border-color: red;
    transition: all 0.8s ease;
    margin-bottom:0px;
  `}
  }

    

`;
