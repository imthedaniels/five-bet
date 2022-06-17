import { Container, Img, Span, Text, Texts } from "./styles"
import { ArrowRight } from "phosphor-react"

const Banner = ({text,imgUrl}) => {
  return(
    <Container>
        <Texts>
        <Text>{text}</Text>
        <Span>Home <ArrowRight size={14} /> {text}</Span>
        </Texts>
        <Img src={imgUrl}></Img>
    </Container>
  )
}

export default Banner