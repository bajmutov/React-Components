import styled from 'styled-components';
import getRandomColor from '../utils/getRandomColor';

export const StatisticsHeading = styled.section`
  text-align: center;
  width: 400px;
  margin: 20px auto;
  box-shadow: 0px 0px 15px 14px #cdcdcd;
  border-radius: 10px;
`;

export const StatisticsTitle = styled.h2`
  font-size: 28px;
  padding: 25px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatisticsItem = styled.li`
  padding: 20px;
  background-color: ${getRandomColor};
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 10px);
`;

export const StatisticsCount = styled.div`
  margin-top: 8px;
  font-weight: 700;
  color: #cdcdcd;
`;

export const StatisticsFileName = styled.div`
  margin-top: 8px;
  font-weight: 700;
  color: #cdcdcd;
`;
