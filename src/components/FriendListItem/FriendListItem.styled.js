import styled from 'styled-components';

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export const FriendPhoto = styled.img`
  margin: 0 0 0 15px;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 24px;
  line-height: calc(24 / 18);
  letter-spacing: -0.02em;
`;
