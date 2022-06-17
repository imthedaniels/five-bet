import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from 'phosphor-react'
import { ImageBackground, LogoData, ContainerCopyright, Li } from './styles'
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <ImageBackground>
      <LogoData border='leftRight'>
        <figure>
          <img src={logo} alt='' />
        </figure>
        <ul>
          <Li>
            <a href='/contact'>Contact</a>
          </Li>
          <Li border='leftRight'>
            <a href='/terms-conditions'>Terms of Services</a>
          </Li>
          <Li>
            <a href='/Privacy'>Privacy</a>
          </Li>
        </ul>
      </LogoData>
      <ContainerCopyright>
        <div className='icons'>
          <FacebookLogo size={32} />
          <TwitterLogo size={32} />
          <LinkedinLogo size={32} />
          <InstagramLogo size={32} />
        </div>
        <p>
          Copyright © 2022 | Developed by{' '}
          <span className='designed'>GambleTeam</span>
        </p>
      </ContainerCopyright>
    </ImageBackground>
  )
}

export default Footer
