import styled from 'styled-components'

export const Container = styled.div `
  background-color: #382590;
  margin-bottom: 30px;
  padding-top: 120px;

  .button{
    background-color: transparent;
    color: var(--bs-white);
    text-transform: capitalize;
    padding: 18px 12px;
    font-weight: 700;
    font-size: 15px;
    font-family: var(--body-font);
  }

  .toolbar{
    background: var(--db-purple);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 768px) {
    .button {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1400px) {
    .button {
      font-size: 24px;
    }

    .toolbar {
      height: 100px;
    }    
  }
`