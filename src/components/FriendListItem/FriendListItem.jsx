import PropTypes from 'prop-types';
import { FriendName, FriendPhoto, FriendStatus } from './FriendListItem.styled';
// import s from './Alert.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <FriendStatus $isOnline={isOnline}></FriendStatus>
      <FriendPhoto src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
