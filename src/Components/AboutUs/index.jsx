import bolasTela from '../../Assets/about-bitbetio-image.png';
import comunidade from '../../Assets/communityPowered.png';
import decentralizada from '../../Assets/decentralised.png';
import semLimites from '../../Assets/noLimits.png';
import pessoaParaPessoa from '../../Assets/PeerToPeer.png';
import { Card } from '@mui/material';
import { Container, Content } from './style.js';
import Title from './Title';

const About = () => {
return(
  <Container>
    <Title/>
    <Content>
      <div className='imgGrande'>
          <figcaption>
              <img src={bolasTela} alt='Imagem de bolas em frente a uma tela'></img>
          </figcaption>
      </div>
      <div className='infos'>
          <section className='cards'>
              <Card className='card'>
                  <figcaption>
                      <img src={comunidade} alt='Imagem comunidade'></img>
                      <h5>Community-powered</h5>
                  </figcaption>
              </Card>

              <Card className='card'>
                  <figcaption>
                      <img src={decentralizada} alt='Imagem decentralizada'></img>
                      <h5>Decentralised</h5>
                  </figcaption>
              </Card>

              <Card className='card'>
                  <figcaption>
                      <img src={semLimites} alt='Imagem sem limites'></img>
                      <h5>No limits</h5>
                  </figcaption>
              </Card>

              <Card className='card'>
                  <figcaption>
                      <img src={pessoaParaPessoa} alt='Imagem pessoa para pessoa'></img>
                      <h5>Peer-to-peer</h5>
                  </figcaption>
              </Card>
          </section>
      </div>
      </Content>
    </Container>
  )
}

export default About