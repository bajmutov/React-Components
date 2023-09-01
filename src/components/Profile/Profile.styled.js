import styled from 'styled-components';

export const CardProfile = styled.div`
  text-align: center;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0px 0px 15px 14px #cdcdcd;
  border-radius: 10px;
`;

export const DescriptionCardProfile = styled.div`
  background-color: #fff;
  padding: 30px 0;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PhotoProfile = styled.img`
  margin: 0 auto 20px;
  width: 240px;
  border-radius: 50%;
`;

export const TextProfile = styled.p`
  margin-bottom: 8px;
  font-weight: ${props => (props.name ? '700' : '400')};
  font-size: ${props => (props.name ? '28px' : '18px')};
  line-height: calc(16 / 12);
  letter-spacing: -0.02em;
`;

export const StatsListProfile = styled.ul`
  width: inherit;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  background-color: #b0c4de;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsElementProfile = styled.li`
  padding: 20px;
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 10px);
  border-right: 1px solid #a4a4a4;
  &:last-child {
    border: none;
  }
`;

export const StatsCount = styled.div`
  margin-top: 8px;
  font-weight: 700;
`;
