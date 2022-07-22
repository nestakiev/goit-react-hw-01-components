import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({id, isOnline, avatar, name}) => {
    return (<Friend key={id}>
                    <Status online={isOnline}></Status>
                    <Avatar src={avatar} width="48" alt="User avatar"/>
                    <Name>{name}</Name>
                </Friend>)
            };

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    };