import styled from 'styled-components';

export const PeopleList = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start */
  align-items: flex-start;
  gap: 5px;
  width: 400px;
  text-align: center;
  margin: 0 auto;
  font-size: 18px;
  background-color: #ffffff;
`;

export const FriendCard = styled.li`
  width: 380px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 20px 20px;
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 10px 10px #cdcdcd;
`;
