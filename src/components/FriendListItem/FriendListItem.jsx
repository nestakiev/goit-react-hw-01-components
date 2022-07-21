import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({friends}) => {
    return (
            friends.map(friend => {
                const {id, isOnline, avatar, name} = friend;
                return <Friend key={id}>
                    <Status online={isOnline}></Status>
                    <Avatar src={avatar} width="48" alt="User avatar"/>
                    <Name>{name}</Name>
                </Friend>
            })
            )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
};