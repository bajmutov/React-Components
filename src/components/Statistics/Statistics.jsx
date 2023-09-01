import PropTypes from 'prop-types';
import {
  StatisticsCount,
  StatisticsFileName,
  StatisticsHeading,
  StatisticsItem,
  StatisticsList,
  StatisticsTitle,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsHeading>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <StatisticsFileName>{stat.label}</StatisticsFileName>
            <StatisticsCount>{stat.percentage}%</StatisticsCount>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsHeading>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
