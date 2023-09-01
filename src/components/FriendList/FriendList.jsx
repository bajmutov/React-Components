import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendCard, PeopleList } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <PeopleList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendCard>
      ))}
    </PeopleList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
