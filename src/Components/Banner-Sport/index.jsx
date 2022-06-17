import { Container, Texts, Text, Span, Divjunta } from "./styled";
import { ArrowRight } from "phosphor-react";

export const Banner = () => {
  return (
    <Container>
      <Texts>
        <Text>Soccer Bet</Text>
        <Span>
          Home <ArrowRight size={14} /> Soccer-Bet
        </Span>
      </Texts>
      <Divjunta />
    </Container>
  );
};
