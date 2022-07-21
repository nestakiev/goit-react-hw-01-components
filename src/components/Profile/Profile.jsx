import PropTypes from 'prop-types';
import { Container, Description, Avatar, DescriptionName, DescriptionText, StatsList, StatsItem, StatsName, StatsValue  } from './Profile.styled';

export const Profile = ({username, location, tag, avatar, stats: {followers, views, likes}}) => {
    return (
        <Container>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <DescriptionName>{username}test</DescriptionName>
      <DescriptionText>@{tag}</DescriptionText>
      <DescriptionText>{location}</DescriptionText>
    </Description>
  
    <StatsList>
      <StatsItem>
        <StatsName>Followers</StatsName>
        <StatsValue>{followers}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsName>Views</StatsName>
        <StatsValue>{views}</StatsValue>
      </StatsItem>
      <StatsItem>
        <StatsName>Likes</StatsName>
        <StatsValue>{likes}</StatsValue>
      </StatsItem>
    </StatsList>
  </Container>)
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
    })
};