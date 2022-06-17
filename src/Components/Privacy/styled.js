import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  background-color: var(--body-color);
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) {
  }
`;

export const Container = styled.section`
  margin-top: 0px;
  padding: 15px;
  background-color: var(--body-color);
  font-family: var(--body-font);
  color: white;
  @media (min-width: 992px) {
    width: 616px;
  }
  @media (min-width: 1200px) {
    width: 736px;
  }
  @media (min-width: 1400px) {
    margin-top: 50px;
    width: 880px;
  }
`;

export const Divterm = styled.div`
  margin-top: 40px;
`;
export const Titleterm = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  line-height: 22px;
  @media (min-width: 992px) {
    font-size: 32px;
    line-height: 42px;
  }
`;
export const Pterm = styled.p`
  font-size: 15px;
  line-height: 19px;
  @media (min-width: 992px) {
    font-size: 18px;

    line-height: 30px;
    font-weight: 400;
  }
`;
export const Ulterm = styled.ul`
  list-style: none;
  margin-left: -39px;
`;
export const Literm = styled.li`
  font-size: 15px;

  line-height: 22px;
  @media (min-width: 992px) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;
export const Olterm = styled.ol``;
