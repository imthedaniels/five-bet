import {
  Divprimaria,
  H4titulo,
  ImgSports,
} from "./styledComponent";
import sports from "../../../Assets/sports.png";
import match from "../../../Assets/match.png";
import team from "../../../Assets/team.png";
import chance from "../../../Assets/chances.png";
import quantia from "../../../Assets/quantia.png";

export const EscolhaumEsporte = () => {
  return (
    <Divprimaria>
        <H4titulo>Select a Sport</H4titulo>
        <ImgSports src={sports} alt="image" />
    </Divprimaria>
  );
};

export const EscolhaumaPartida = () => {
  return (
    <Divprimaria>
        <H4titulo>Choose a Match</H4titulo>
        <ImgSports src={match} alt="image" />
    </Divprimaria>
  );
};

export const EscolhaumTime = () => {
  return (
    <Divprimaria>
        <H4titulo>Choose your Team</H4titulo>
        <ImgSports src={team} alt="image" />
    </Divprimaria>
  );
};

export const EscolhasuasChances = () => {
  return (
    <Divprimaria>
        <H4titulo>Choose your Odd</H4titulo>
        <ImgSports src={chance} alt="image" />
    </Divprimaria>
  );
};

export const EscolhaumaQuantia = () => {
  return (
    <Divprimaria>
        <H4titulo>Choose your Amount</H4titulo>
        <ImgSports src={quantia} alt="image" />
    </Divprimaria>
  );
};
