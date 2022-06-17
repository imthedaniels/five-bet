import styled from "styled-components";
import indexBG from "../../Assets/index-bg.png";
import bannerBG from "../../Assets/banner-bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 71vh;
  background-color: var(--banner-back);
  padding-top: 120px;
  align-items: flex-end;
`;

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
  margin-left: 20%;
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
  object-fit: contain;
  margin-right: 38px;
  margin-top: 60px;
  width: 456px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Divjunta = styled.div`
  background-image: url(${indexBG}), url(${bannerBG});
  background-color: #1f2340;
  background-repeat: no-repeat;
  background-position: top 100px right 199px, top 95px right 170px;
  position: relative;
  background-size: auto;
  width: 189vw;
  height: 44vh;

  @media (min-width: 1200px) {
    background-position: bottom -77px right 182px, top 69px right 47px;
    height: 50vh;
  }
  @media (min-width: 1300px) {
    background-position: bottom -83px right 195px, top 52px right 45px;
    height: 50vh;
  }
  @media (min-width: 1400px) {
    background-position: bottom -83px right 210px, top 52px right 45px;
    height: 59vh;
  }
`;
