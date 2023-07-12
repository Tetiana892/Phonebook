import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const UserInfoTitle = styled.span``;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  background-color: transparent;
  color: #ffff;
  margin-left: 20px;
  padding: 8px;

  font-weight: 500;
  font-size: 16px;
  border: none;
  cursor: pointer;

  border-radius: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #42362b;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
`;
