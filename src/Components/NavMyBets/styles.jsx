import styled from 'styled-components'

export const SectionButtons = styled.div`
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #cab4ff;
  padding: 15px;
  border-radius: 50px;
  width: 190px;
  height: 230px;

  button {
  background-color: var(--hover-color);
  border: 2px solid var(--hover-color);
  border-radius: 50px;
  width: 150px;
  height: 45px;
  color: var(--bs-white);
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  }

  .open {
    background-color: #cab4ff;
    border: 2px solid #cab4ff;
    color: var(--indigo-light);
  }

  @media screen and (min-width: 603px) {
    height: 80px;
    width: 520px;

    button {
      margin: 5px;
    }

    @media screen and (min-width: 1400px) {
      width: fit-content;
      height: fit-content;
      position: absolute;
      left: 500px;
    }
  }

  @media screen and (min-width: 990px) {
    margin-left: 30px;
  }
`