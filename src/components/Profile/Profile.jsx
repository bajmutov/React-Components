import PropTypes from 'prop-types';
import {
  CardProfile,
  DescriptionCardProfile,
  PhotoProfile,
  StatsCount,
  StatsElementProfile,
  StatsListProfile,
  TextProfile,
} from './Profile.styled';
// import s from './Alert.module.css';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <CardProfile>
      <DescriptionCardProfile>
        <PhotoProfile src={avatar} alt={username} />
        <TextProfile name={username}>{username}</TextProfile>
        <TextProfile>@{tag}</TextProfile>
        <TextProfile>{location}</TextProfile>
      </DescriptionCardProfile>
      <StatsListProfile>
        <StatsElementProfile>
          <div className="label">Followers</div>
          <StatsCount>{followers}</StatsCount>
        </StatsElementProfile>
        <StatsElementProfile>
          <div className="label">Views</div>
          <StatsCount>{views}</StatsCount>
        </StatsElementProfile>
        <StatsElementProfile>
          <div className="label">Likes</div>
          <StatsCount>{likes}</StatsCount>
        </StatsElementProfile>
      </StatsListProfile>
    </CardProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
