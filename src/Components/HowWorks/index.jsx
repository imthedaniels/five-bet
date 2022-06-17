import { useState } from "react";
import icon1 from "../../Assets/how-works-icon-1.png";
import icon2 from "../../Assets/how-works-icon-2.png";
import icon3 from "../../Assets/how-works-icon-3.png";
import icon4 from "../../Assets/how-works-icon-4.png";
import icon5 from "../../Assets/how-works-icon-5.png";

import {
  EscolhaumEsporte,
  EscolhaumaPartida,
  EscolhaumTime,
  EscolhasuasChances,
  EscolhaumaQuantia,
} from "./Quadros";
import {
  DivExpHowWork,
  // SectionHowWork,
  TitleHowWork,
  Divcontainer,
  DivListaHowWork,
  HowWorkH5,
  HowWorkH2,
  HowWorkP,
  ListaHowWork,
  ItemListaHowWork,
  ImgHowWork,
  SpanHowWork,
} from "./styledComponent";

const HowWorks = () => {
  const [janela, setJanela] = useState("esporte");

  const trocandoGuia = () => {
    switch (janela) {
      case "partida":
        return <EscolhaumaPartida />;
      case "time":
        return <EscolhaumTime />;
      case "chances":
        return <EscolhasuasChances />;
      case "quantia":
        return <EscolhaumaQuantia />;
      default:
        return <EscolhaumaPartida />;
    }
  };

  function trocandoState(state) {
    setJanela(state);
  }
  return (
    // <SectionHowWork>
      <Divcontainer>
        <DivExpHowWork>
          <HowWorkH5>Get to Know</HowWorkH5>
          <HowWorkH2>How 5Bet Works?</HowWorkH2>
          <HowWorkP>
            Our platform has been designed from the ground up to be tailored to the unique form of betting and settlement offered by the blockchain. Follow these simple steps and make profits!
          </HowWorkP>
        </DivExpHowWork>

        <DivListaHowWork>
          <div>
            <ListaHowWork>
              <ItemListaHowWork
                onClick={() => {
                  trocandoState("partida");
                }}
              >
                <SpanHowWork>
                  <ImgHowWork src={icon1} alt="icon" />
                </SpanHowWork>
                <TitleHowWork>Choose a Match</TitleHowWork>
              </ItemListaHowWork>
              <ItemListaHowWork
                onClick={() => {
                  trocandoState("time");
                }}
              >
                <SpanHowWork>
                  <ImgHowWork src={icon2} alt="icon" />
                </SpanHowWork>
                <TitleHowWork>Choose your Team</TitleHowWork>
              </ItemListaHowWork>
              <ItemListaHowWork
                onClick={() => {
                  trocandoState("chances");
                }}
              >
                <SpanHowWork>
                  <ImgHowWork src={icon3} alt="icon" />
                </SpanHowWork>
                <TitleHowWork>Choose your Odd</TitleHowWork>
              </ItemListaHowWork>
              <ItemListaHowWork
                onClick={() => {
                  trocandoState("quantia");
                }}
              >
                <SpanHowWork>
                  <ImgHowWork src={icon4} alt="icon" />
                </SpanHowWork>
                <TitleHowWork>Choose your Amount</TitleHowWork>
              </ItemListaHowWork>
            </ListaHowWork>
          </div>
          {trocandoGuia()}
        </DivListaHowWork>
      </Divcontainer>
    //</SectionHowWork>
  );
};

export default HowWorks;
