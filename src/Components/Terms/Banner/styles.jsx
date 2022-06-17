import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: var(--banner-back);
  justify-content: space-between;
  padding-top: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
  object-fit: contain;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const Texts = styled.span`
  align-self: center;
  justify-content: center;
  width: 100%;
`;
export const Text = styled.h1`
  color: var(--bs-light);
  font-size: 55px;
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
