import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-top: 80px;
`;
export const SocialLink = styled(Link)`
  & > svg {
    width: 20px;
    height: 20px;

    fill: #42362b;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  & > svg:hover {
    fill: #4158d0;
    transform: scale(1.5);
  }
`;
