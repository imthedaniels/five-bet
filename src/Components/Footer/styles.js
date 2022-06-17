import styled, { css } from "styled-components";
import footer from "../../Assets/footer.png";

export const ContainerCopyright = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #857fc7;
  flex-wrap: wrap;

  .copyright {
    color: var(--head-alt-color);
    font-weight: bold;
  }

  .designed {
    color: var(--head-alt-color);
    font-weight: bold;
  }

  @media screen and (min-width: 465px) {
    .icons {
    padding-top: 15px;
    margin: auto 15px auto 0px;
  }
  }

  @media (max-width: 632px) {
    justify-content: center;

    p {
      text-align: center;
    }
  }

  p {
    font-weight: 700;
  }
`;

export const LogoData = styled.div`
  width: 96%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  figure {
    margin-left: 25px;
  }

  ul {
    margin-right: 20px;
    font-size: 15px;
  }

  @media(max-width: 700px) {
    flex-direction: row;
    justify-content: center;
    ul{
      text-align: center;
      display:block;
      padding:0px;
    }

    li{
      margin:0 5px;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    }
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 270px;
  background-image: url(${footer});
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: center;
  color: var(--bs-light);
`;

export const Li = styled.li`
    font-family: var(--body-font);
    padding: 0 15px;
    list-style: none;
    a {
        text-decoration: none;
        color: var(--bs-light);
        font-weight: 600;
        font-size: 14px;
        margin: auto 5px;
      }

    ${(props) => {
      switch (props.border) {
        case "leftRight":
          return css`
            border-right: 1px solid #7876d5;
            border-left: 1px solid #7876d5;
          `;
        default:
          return css`
            border: none;
          `;
      }
    }}

    @media screen and (min-width: 768px) {

    }

    @media(max-width: 632px) {
          padding: 0;

    }
`;
