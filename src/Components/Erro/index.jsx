import {
  Container,
  IMG404,
  DIVbase,
  H2text,
  Ptext,
  ButtonHome,
  DIVButton,
} from "./styled";
import Img404 from "../../Assets/error-illus.png";
import { useHistory } from "react-router-dom";

export const Erro = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <Container>
      <IMG404 src={Img404} alt="404" />
      <DIVbase>
        <H2text>Page not found</H2text>
        <Ptext>Oops.. Looks like you got lost:(</Ptext>
        <DIVButton>
          <ButtonHome onClick={() => handleClick()}>Go Back Home</ButtonHome>
        </DIVButton>
      </DIVbase>
    </Container>
  );
};
