import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  width: 600px;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -khtml-border-radius: 10px;
  box-shadow: 0px 0px 10px 10px #cdcdcd;
  border-collapse: collapse;
  color: #a4a4a4;
`;

export const TableTh = styled.th`
  vertical-align: bottom;
  height: 40px;
  text-transform: uppercase;
  vertical-align: middle;
  background-color: #5b92e5;
  border: 1px solid #cdcdcd;
  color: #cdcdcd;
`;

export const TableTr = styled.tr`
  text-align: center;
  vertical-align: middle;
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export const TableTd = styled.td`
  text-align: center;
  vertical-align: middle;
  height: 40px;
  border: 1px solid #cdcdcd;
`;
