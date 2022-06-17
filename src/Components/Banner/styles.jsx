import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    width: 100vw;
    background-color: var(--banner-back);
    justify-content: space-between;  
    padding-top: 110px;
`

export const Texts = styled.span`
  align-self: center;
  justify-content: center;
  width: 100%;
`;
export const Text = styled.h1`
  color: var(--bs-light);
  font-size: 76px;
  line-height: 98.8px;
  font-family: var(--body-font);
  color: var(--bs-white);
  font-weight: 600;
  text-transform: initial;
  transition: all 0.3s;
  box-sizing: border-box;
  display: block;

  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
  box-sizing: border-box;
  margin-left: 10%;
`;
export const Span = styled.p`
  align-items: center;
  justify-content: center;
  line-height: 98.8px;
  font-family: var(--body-font);
  color: var(--bs-white);
  font-weight: 600;
  box-sizing: border-box;
  display: block;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: none;
  box-sizing: border-box;
  margin-left: 22%;
`;

export const Img = styled.img`
  src: url(${(props) => props.src});
    width: 1600px;
    height: 500px;
    object-fit: cover;
    object-position: top;

  @media (max-width: 1200px) {
    display: none;
  }
`;
