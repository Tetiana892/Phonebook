import { BsGithub, BsLinkedin, BsFillSuitHeartFill } from 'react-icons/bs';
import { FooterStyle, SocialLink } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <BsFillSuitHeartFill />
      <p>Tetiana Onyshchenko</p>
      <SocialLink to="https://github.com/Tetiana892?tab=repositories">
        <BsGithub />
      </SocialLink>
      <SocialLink to="https://linkedin.com/in/tetiana-onyshchenko-5880b9251/">
        <BsLinkedin />
      </SocialLink>
    </FooterStyle>
  );
};
