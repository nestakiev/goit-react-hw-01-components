import PropTypes from 'prop-types';
import { Container, Title, StatsList, StatsItem, StatsName, StatsValue  } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Container>
        {title && (<Title>{title}</Title>)}
        <StatsList>
            {stats.map(stat => { 
                const {id, label, percentage} = stat;
                return <StatsItem key={id}>
                    <StatsName>{label}</StatsName>
                    <StatsValue>{percentage}%</StatsValue>
                    </StatsItem>})}
        </StatsList>
        </Container>

    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
};