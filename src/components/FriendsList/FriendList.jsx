import PropTypes from 'prop-types';
import { Container } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <Container>
          {friends.map(friend => { 
                const {id, isOnline, avatar, name} = friend;
                return  <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id}/>
            })}
        </Container>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
};