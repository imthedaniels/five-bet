import { Container, Span, Text, Texts } from "./styles";
import { ArrowRight } from "phosphor-react";

const Banner = ({ text, imgUrl }) => {
  return (
    <Container src={imgUrl}>
      <Texts>
        <Text>{text}</Text>
        <Span>
          Home <ArrowRight size={14} /> {text}
        </Span>
      </Texts>
    </Container>
  );
};

export default Banner;
